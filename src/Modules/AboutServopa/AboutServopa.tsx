"use client";

import "./AboutServopa.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import TextDefault from "@/components/TextDefault/TextDefault";
import useInView from "@/hooks/useInView";

import { aboutServopaContent } from "./AboutServopaContent";

type AboutServopaProps = {
  debug?: boolean;
};

const AboutServopa: FC<AboutServopaProps> = ({ debug = false }) => {
  const content = aboutServopaContent;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25, once: false });
  const { ref: bgRef, inView: bgInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: false });

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="aboutServopa" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div ref={bgRef} className={`aboutServopa__bg ${bgInView ? "is-visible" : ""}`} aria-hidden="true">
        <div className="aboutServopa__lightStage">
          <div className="aboutServopa__beam aboutServopa__beam--left" />
          <div className="aboutServopa__beam aboutServopa__beam--right" />
          <div className="aboutServopa__glow" />
        </div>

        <div className="aboutServopa__blurLayer" />
      </div>

      <div ref={ref} className={`aboutServopa__innerContainer ${inView ? "is-visible" : ""}`}>
        <div className="aboutServopa__title aboutServopa__reveal">{content.title}</div>
        <TextDefault className="aboutServopa__paragraph aboutServopa__reveal" text={content.paragraph} />
        <div className="aboutServopa__cards">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className="aboutServopa__card aboutServopa__reveal"
              style={{ "--reveal-index": index + 2 } as React.CSSProperties}
            >
              <span className="aboutServopa__cardTitle">{card.title}</span>
              <TextDefault className="aboutServopa__cardDescription" text={card.description} />
            </div>
          ))}
        </div>
      </div>
    </SectionDefault>
  );
};

export default AboutServopa;
