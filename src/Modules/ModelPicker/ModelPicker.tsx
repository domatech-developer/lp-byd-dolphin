"use client";

import "./ModelPicker.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

import { modelPickerContent } from "./ModelPickerContent";

type ModelPickerProps = {
  debug?: boolean;
};

const ModelPicker: FC<ModelPickerProps> = ({ debug = false }) => {
  const content = modelPickerContent;
  const [activeId, setActiveId] = useState(content.cards[0]?.id);

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="modelPicker" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div className="modelPicker__head">
        <h2 className="modelPicker__title">{content.title}</h2>
        <p className="modelPicker__paragraph">{content.paragraph}</p>
      </div>

      <div className="modelPicker__cards" role="tablist">
        {content.cards.map((card) => {
          const isActive = card.id === activeId;

          return (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`modelPicker__card ${isActive ? "modelPicker__card--active" : ""}`}
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
            </button>
          );
        })}
      </div>
    </SectionDefault>
  );
};

export default ModelPicker;
