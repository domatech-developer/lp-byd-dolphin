"use client";

import "./ModelsLineup.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import TextDefault from "@/components/TextDefault/TextDefault";
import useInView from "@/hooks/useInView";

import { modelsLineupContent } from "./ModelsLineupContent";

type ModelsLineupProps = {
  debug?: boolean;
};

const ModelsLineup: FC<ModelsLineupProps> = ({ debug = false }) => {
  const content = modelsLineupContent;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4, once: false });

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="modelsLineup" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div ref={ref} className={`modelsLineup__stage ${inView ? "is-visible" : ""}`}>
        <div className="modelsLineup__imageFrame">
          <ImgContainer
            className="modelsLineup__image"
            image_desktop={content.image}
            image_mobile={content.imageMobile}
            alt={content.image.alt}
          />
        </div>

        <div className="modelsLineup__head">
          <TextDefault className="modelsLineup__title" text={content.title} />
          <TextDefault className="modelsLineup__paragraph" text={content.paragraph} />
        </div>

        <div className="modelsLineup__footer">
          <div className="modelsLineup__iconContainer" aria-hidden="true">
            <img className="modelsLineup__icon" src="/icons/byd-watermark-white.svg" alt="" />
          </div>
          <span className="modelsLineup__divider" aria-hidden="true" />
          <ul className="modelsLineup__badges">
            {content.badges.map((badge) => (
              <li className="modelsLineup__badge" key={badge}>
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionDefault>
  );
};

export default ModelsLineup;
