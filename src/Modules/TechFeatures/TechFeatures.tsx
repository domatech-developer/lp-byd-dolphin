"use client";

import "./TechFeatures.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";

import { techFeaturesContent } from "./TechFeaturesContent";

type TechFeaturesProps = {
  debug?: boolean;
};

const TechFeatures: FC<TechFeaturesProps> = ({ debug = false }) => {
  const content = techFeaturesContent;
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
    <SectionDefault className="techFeatures" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div className="techFeatures__sticky">
        <div className="techFeatures__stickyBg">
          <ImgContainer className="techFeatures__stickyBg" image={content.background} alt={content.background.alt} />
        </div>

        <h2 className="techFeatures__title">
          {content.titleLines.map((line, index) => (
            <span key={index} className="techFeatures__titleLine" style={{ opacity: line.opacity ?? 1 }}>
              {line.text}
            </span>
          ))}
        </h2>

        <p className="techFeatures__paragraph">{content.paragraph}</p>
      </div>

      <div className="techFeatures__cards">
        {content.cards.map((card, index) => {
          const isExpanded = expanded.has(index);

          return (
            <div className={`techFeatures__card ${isExpanded ? "techFeatures__card--expanded" : ""}`} key={card.title}>
              <ImgContainer className="techFeatures__cardImage" image={card.image} alt={card.image.alt} />
              <div className="techFeatures__cardHoverPanel" aria-hidden="true" />
              <div className="techFeatures__cardInfo">
                <div className="techFeatures__cardTitleRow">
                  <span className="techFeatures__cardTitle">{card.title}</span>
                  {card.description && (
                    <ButtonDefault
                      className="techFeatures__cardToggle"
                      styling="ghost"
                      theme="light"
                      circular
                      icon={isExpanded ? "minus" : "plus"}
                      variantLink={{ type: "button" }}
                      data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
                      aria-label={isExpanded ? "Ver menos" : "Ver mais"}
                      aria-expanded={isExpanded}
                      onClick={() => toggleExpanded(index)}
                    />
                  )}
                </div>
                {card.description && <p className="techFeatures__cardDescription">{card.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </SectionDefault>
  );
};

export default TechFeatures;
