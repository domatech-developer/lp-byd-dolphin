"use client";

import "./ImageZoom.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import TextDefault from "@/components/TextDefault/TextDefault";
import useInView from "@/hooks/useInView";

import { imageZoomContent } from "./ImageZoomContent";

type ImageZoomProps = {
  debug?: boolean;
};

const ImageZoom: FC<ImageZoomProps> = ({ debug = false }) => {
  const content = imageZoomContent;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false });

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="imageZoom" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div ref={ref} className={`imageZoom__stage ${inView ? "is-visible" : ""}`}>
        <div className="imageZoom__background">
          <ImgContainer
            className="imageZoom__background"
            image_desktop={content.background}
            image_mobile={content.backgroundMobile}
            alt={content.background.alt}
          />
        </div>

        <div className="imageZoom__topShadow" aria-hidden="true" />

        <div className="imageZoom__watermark" aria-hidden="true">
          <div className="imageZoom__watermarkPart imageZoom__watermarkPart--1">
            <img className="imageZoom__watermarkIcon" src="/images/image-zoom/vector-1.svg" alt="" />
          </div>
          <div className="imageZoom__watermarkPart imageZoom__watermarkPart--2">
            <img className="imageZoom__watermarkIcon" src="/images/image-zoom/vector-3.svg" alt="" />
          </div>
          <div className="imageZoom__watermarkPart imageZoom__watermarkPart--3">
            <img className="imageZoom__watermarkIcon" src="/images/image-zoom/vector-2.svg" alt="" />
          </div>
        </div>

        <TextDefault className="imageZoom__title" text={content.title} />
        <TextDefault className="imageZoom__paragraph" text={content.paragraph} />
      </div>
    </SectionDefault>
  );
};

export default ImageZoom;
