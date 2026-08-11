import "./PlayButton.scss";
import React, { forwardRef } from "react";

type PlayButtonProps = {
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  className?: string;
  pulse?: boolean;
  background?: string;
};

const PlayButton = forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ onClick, ariaLabel = "Reproduzir vídeo", ariaExpanded, className, pulse = true, background }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`playButton ${pulse ? "" : "playButton--noPulse"} ${className ?? ""}`.trim()}
        style={background ? { background } : undefined}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={ariaExpanded}
        onClick={onClick}
      >
        <img src="/icons/play.svg" alt="" aria-hidden="true" />
      </button>
    );
  }
);

PlayButton.displayName = "PlayButton";

export default PlayButton;
