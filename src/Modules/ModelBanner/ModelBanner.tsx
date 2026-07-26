"use client";

import "./ModelBanner.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import PlayButton from "@/components/PlayButton/PlayButton";
import VideoModal from "@/components/VideoModal/VideoModal";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import useInView from "@/hooks/useInView";

import { modelBannerContent } from "./ModelBannerContent";

type ModelBannerProps = {
  debug?: boolean;
};

const ModelBanner: FC<ModelBannerProps> = ({ debug = false }) => {
  const content = modelBannerContent;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4, once: false });

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="modelBanner" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div ref={ref} className={`modelBanner__stage ${inView ? "is-visible" : ""}`}>
        <div className="modelBanner__imageFrame">
          <ImgContainer className="modelBanner__imageFrame" image={content.image} alt={content.image.alt} />
        </div>

        <div className="modelBanner__overlay">
          <div className="modelBanner__info">
            {content.badge && <span className="modelBanner__badge">{content.badge}</span>}
            <p className="modelBanner__title">{content.title}</p>
          </div>

          <div className="modelBanner__videoCardWrapper">
            <div className="modelBanner__videoCard">
              <PlayButton ariaLabel={content.videoCard.ariaLabel} ariaExpanded={isVideoOpen} onClick={() => setIsVideoOpen(true)} />
              <span className="modelBanner__divider" aria-hidden="true" />
              <div className="modelBanner__videoText">
                <p className="modelBanner__videoTitle">{content.videoCard.title}</p>
                <p className="modelBanner__videoSubtitle">{content.videoCard.subtitle}</p>
              </div>
            </div>

            <div className="modelBanner__pill">
              <span className="modelBanner__pillDot" aria-hidden="true" />
              <span>{content.statusPill}</span>
            </div>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <VideoModal
          url={content.videoCard.videoUrl}
          mimeType={content.videoCard.mimeType}
          ariaLabel={content.videoCard.ariaLabel}
          closeAriaLabel={content.videoCard.closeAriaLabel}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </SectionDefault>
  );
};

export default ModelBanner;
