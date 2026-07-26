"use client";

import "./VideoServopa.scss";
import React, { FC, useState, useEffect, useRef } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import PlayButton from "@/components/PlayButton/PlayButton";
import VideoModal from "@/components/VideoModal/VideoModal";
import useInView from "@/hooks/useInView";

import { videoServopaContent } from "./VideoServopaContent";

type VideoServopaProps = {
  debug?: boolean;
};

const VideoServopa: FC<VideoServopaProps> = ({ debug = false }) => {
  const content = videoServopaContent;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const wasVideoOpen = useRef(isVideoOpen);

  useEffect(() => {
    if (wasVideoOpen.current && !isVideoOpen) {
      playButtonRef.current?.focus();
    }
    wasVideoOpen.current = isVideoOpen;
  }, [isVideoOpen]);

  if (!content || !content.section_check) return null;

  return (
    <SectionDefault className="videoServopa" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div
        className="videoServopa__background"
        style={{
          backgroundImage: `url(${content.background_image})`
        }}
      >
        <div ref={ref} className={`videoServopa__innerContainer ${inView ? "is-visible" : ""}`}>
          <div className="videoServopa__content">
            <h2 className="videoServopa__title">
              <span className="videoServopa__titleBold">{content.title_bold}</span>
              {content.title_thin}
            </h2>
            <PlayButton
              ref={playButtonRef}
              ariaLabel={content.video.aria_label}
              ariaExpanded={isVideoOpen}
              onClick={() => setIsVideoOpen(true)}
            />
          </div>
        </div>
      </div>
      {isVideoOpen && content.video && (
        <VideoModal
          url={content.video.url}
          mimeType={content.video.mime_type}
          ariaLabel={content.video.aria_label}
          closeAriaLabel={content.video.close_aria_label}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </SectionDefault>
  );
};

export default VideoServopa;
