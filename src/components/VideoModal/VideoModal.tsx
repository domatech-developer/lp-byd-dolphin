"use client";
import "./VideoModal.scss";
import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";

interface VideoModalProps {
  url: string;
  mimeType?: string;
  ariaLabel?: string;
  closeAriaLabel?: string;
  onClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({
  url,
  mimeType = "video/mp4",
  ariaLabel = "Vídeo institucional",
  closeAriaLabel = "Fechar modal de vídeo",
  onClose
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    videoRef.current?.play()?.catch(() => {});
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="videoModal" role="dialog" aria-modal="true" aria-label={ariaLabel} onClick={onClose}>
      <div className="videoModal__box" onClick={(e) => e.stopPropagation()}>
        <ButtonDefault
          ref={closeButtonRef}
          className="videoModal__close"
          styling="ghost"
          theme="light"
          circular
          icon="close-white"
          iconWidth={36}
          iconHeight={36}
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
          onClick={onClose}
          aria-label={closeAriaLabel}
        />
        <video ref={videoRef} className="videoModal__video" controls playsInline autoPlay>
          <source src={url} type={mimeType} />
        </video>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
