"use client";

import "./ModelPicker.scss";
import React, { FC, useEffect, useRef, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";

import { modelPickerContent } from "./ModelPickerContent";

type ModelPickerProps = {
  debug?: boolean;
};

const ModelPicker: FC<ModelPickerProps> = ({ debug = false }) => {
  const content = modelPickerContent;
  const [activeId, setActiveId] = useState(content.cards[0]?.id);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    cardRefs.current[activeId ?? ""]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, [activeId]);

  if (!content || !content.section_check) return null;

  const activeIndex = content.cards.findIndex((card) => card.id === activeId);

  const goPrev = () => {
    const prevIndex = (activeIndex - 1 + content.cards.length) % content.cards.length;
    setActiveId(content.cards[prevIndex]?.id);
  };

  const goNext = () => {
    const nextIndex = (activeIndex + 1) % content.cards.length;
    setActiveId(content.cards[nextIndex]?.id);
  };

  return (
    <SectionDefault className="modelPicker" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div className="modelPicker__head">
        <h2 className="modelPicker__title">{content.title}</h2>
        <p className="modelPicker__paragraph">{content.paragraph}</p>
      </div>

      <div className="modelPicker__cards" role="tablist" onMouseLeave={() => setActiveId(content.cards[0]?.id)}>
        {content.cards.map((card) => {
          const isActive = card.id === activeId;

          return (
            <ButtonDefault
              key={card.id}
              ref={(el) => {
                cardRefs.current[card.id] = el as HTMLButtonElement | null;
              }}
              styling="ghost"
              theme="light"
              variantLink={{ type: "button" }}
              data={{ type: "", value: "", url: "", name: card.name, title: card.name, target: "" }}
              role="tab"
              aria-selected={isActive}
              className={`modelPicker__card ${isActive ? "modelPicker__card--active" : ""}`}
              onMouseEnter={() => setActiveId(card.id)}
              onFocus={() => setActiveId(card.id)}
              onClick={() => setActiveId(card.id)}
            >
              <div className="modelPicker__cardImage">
                <ImgContainer className="modelPicker__cardImage" image={card.image} alt={card.image.alt} />
              </div>
              <div className="modelPicker__cardGlass" aria-hidden="true" />

              <div className="modelPicker__cardInfo">
                <span className="modelPicker__cardName">{card.name}</span>

                <div className="modelPicker__cardDetails">
                  <div className="modelPicker__cardDetailsInner">
                    <p className="modelPicker__cardDescription">{card.description}</p>
                    <p className="modelPicker__cardBestFor">
                      <strong>{card.bestForLabel}</strong> {card.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </ButtonDefault>
          );
        })}
      </div>

      <div className="modelPicker__nav">
        <ButtonDefault
          className="modelPicker__nav__btn modelPicker__nav__btn--prev"
          styling="ghost"
          theme="light"
          circular
          icon="arrow-left-white-nav"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: content.prevArrowAriaLabel, title: "", target: "" }}
          aria-label={content.prevArrowAriaLabel}
          onClick={goPrev}
        />
        <ButtonDefault
          className="modelPicker__nav__btn modelPicker__nav__btn--next"
          styling="ghost"
          theme="light"
          circular
          icon="arrow-right-black-nav"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: content.nextArrowAriaLabel, title: "", target: "" }}
          aria-label={content.nextArrowAriaLabel}
          onClick={goNext}
        />
      </div>
    </SectionDefault>
  );
};

export default ModelPicker;
