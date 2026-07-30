"use client";

import "./ModelCarousel.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";

import { modelCarouselContent } from "./ModelCarouselContent";

type ModelCarouselProps = {
  debug?: boolean;
};

const ModelCarousel: FC<ModelCarouselProps> = ({ debug = false }) => {
  const content = modelCarouselContent;
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  if (!content || !content.section_check) return null;

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <SectionDefault className="modelCarousel" debug={debug}>
      <CarouselDefault options={{ align: "start", containScroll: "trimSnaps" }} hideButtons>
        {content.cards.map((card, index) => {
          const isExpanded = expanded.has(index);

          return (
            <CarouselSlide key={card.title}>
              <div className={`modelCarousel__card ${isExpanded ? "modelCarousel__card--expanded" : ""}`}>
                <ImgContainer className="modelCarousel__cardImage" image={card.image} alt={card.image.alt} />
                <div className="modelCarousel__cardHoverPanel" aria-hidden="true" />
                <div className="modelCarousel__cardInfo">
                  <div className="modelCarousel__cardTitleRow">
                    <span className="modelCarousel__cardTitle">{card.title}</span>
                    {card.description && (
                      <ButtonDefault
                        className="modelCarousel__cardToggle"
                        styling="ghost"
                        theme="light"
                        circular
                        icon={isExpanded ? "minus" : "plus"}
                        iconWidth={32}
                        iconHeight={32}
                        variantLink={{ type: "button" }}
                        data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
                        aria-label={isExpanded ? "Ver menos" : "Ver mais"}
                        aria-expanded={isExpanded}
                        onClick={() => toggleExpanded(index)}
                      />
                    )}
                  </div>
                  {card.description && <p className="modelCarousel__cardDescription">{card.description}</p>}
                </div>
              </div>
            </CarouselSlide>
          );
        })}
      </CarouselDefault>
    </SectionDefault>
  );
};

export default ModelCarousel;
