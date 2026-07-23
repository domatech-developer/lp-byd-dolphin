import "./BotaoPlay.scss";
import React, { forwardRef } from "react";

type BotaoPlayProps = {
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  className?: string;
  pulse?: boolean;
  background?: string;
};

const BotaoPlay = forwardRef<HTMLButtonElement, BotaoPlayProps>(
  ({ onClick, ariaLabel = "Reproduzir vídeo", ariaExpanded, className, pulse = true, background }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`botaoPlay ${pulse ? "" : "botaoPlay--noPulse"} ${className ?? ""}`.trim()}
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

BotaoPlay.displayName = "BotaoPlay";

export default BotaoPlay;
