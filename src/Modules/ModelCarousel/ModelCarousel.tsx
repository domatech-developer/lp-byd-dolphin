"use client";

import "./ModelCarousel.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import CarouselDefault from "@/components/Carousel/CarouselDefault/CarouselDefault";
import CarouselSlide from "@/components/Carousel/CarouselDefault/components/CarouselSlide";

import { modelCarouselContent } from "./ModelCarouselContent";

type ModelCarouselProps = {
  debug?: boolean;
};

const ModelCarousel: FC<ModelCarouselProps> = ({ debug = false }) => {
  const content = modelCarouselContent;
  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="modelCarousel" debug={debug}>
      <CarouselDefault options={{ align: "start", containScroll: "trimSnaps" }} hideButtons>
        {content.cards.map((card) => (
          <CarouselSlide key={card.title}>
            <div className="modelCarousel__card">
              <ImgContainer className="modelCarousel__cardImage" image={card.image} alt={card.image.alt} />
              <div className="modelCarousel__cardHoverPanel" aria-hidden="true" />
              <div className="modelCarousel__cardInfo">
                <span className="modelCarousel__cardTitle">{card.title}</span>
                {card.description && <p className="modelCarousel__cardDescription">{card.description}</p>}
              </div>
            </div>
          </CarouselSlide>
        ))}
      </CarouselDefault>
    </SectionDefault>
  );
};

export default ModelCarousel;
