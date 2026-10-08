"use client";

import "./ModelBanner.scss";
import React, { FC, useEffect, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import PlayButton from "@/components/PlayButton/PlayButton";
import VideoModal from "@/components/VideoModal/VideoModal";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import TextDefault from "@/components/TextDefault/TextDefault";
import useInView from "@/hooks/useInView";
import { useModelSelection } from "@/provider/ModelSelectionProvider/ModelSelectionProvider";

import { modelBannerContent } from "./ModelBannerContent";

type ModelBannerProps = {
  debug?: boolean;
};

const ModelBanner: FC<ModelBannerProps> = ({ debug = false }) => {
  const content = modelBannerContent;
  const { activeId } = useModelSelection();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4, once: false });

  useEffect(() => {
    setIsVideoOpen(false);
  }, [activeId]);

  if (!content || !content.section_check) return null;

  const model = content.models[activeId] ?? Object.values(content.models)[0];

  return (
    <SectionDefault className="modelBanner" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div ref={ref} className={`modelBanner__stage ${inView ? "is-visible" : ""}`}>
        <div className="modelBanner__imageFrame">
          <ImgContainer key={activeId} className="modelBanner__imageFrame" image={model.image} alt={model.image.alt} />
        </div>

        <div className="modelBanner__overlay">
          <div className="modelBanner__info">
            {model.badge && <span className="modelBanner__badge">{model.badge}</span>}
            <TextDefault className="modelBanner__title" text={model.title} />
          </div>

          {model.videoCard && (
            <div className="modelBanner__videoCardWrapper">
              <div className="modelBanner__videoCard">
                <PlayButton ariaLabel={model.videoCard.ariaLabel} ariaExpanded={isVideoOpen} onClick={() => setIsVideoOpen(true)} />
                <span className="modelBanner__divider" aria-hidden="true" />
                <div className="modelBanner__videoText">
                  <TextDefault className="modelBanner__videoTitle" text={model.videoCard.title} />
                  <TextDefault className="modelBanner__videoSubtitle" text={model.videoCard.subtitle} />
                </div>
              </div>

              <div className="modelBanner__pill">
                <span className="modelBanner__pillDot" aria-hidden="true" />
                <span>{content.statusPill}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {isVideoOpen && model.videoCard && (
        <VideoModal
          url={model.videoCard.videoUrl}
          mimeType={model.videoCard.mimeType}
          ariaLabel={model.videoCard.ariaLabel}
          closeAriaLabel={model.videoCard.closeAriaLabel}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </SectionDefault>
  );
};

export default ModelBanner;
