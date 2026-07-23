"use client";
import "./VideoModal.scss";
import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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
        <button ref={closeButtonRef} className="videoModal__close" type="button" onClick={onClose} aria-label={closeAriaLabel}>
          <img src="/icons/close-white.svg" alt="" aria-hidden="true" />
        </button>
        <video ref={videoRef} className="videoModal__video" controls playsInline autoPlay>
          <source src={url} type={mimeType} />
        </video>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
