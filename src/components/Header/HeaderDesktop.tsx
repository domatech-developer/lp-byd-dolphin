"use client";

import "./HeaderDesktop.scss";
import { FC, useEffect, useRef, useState } from "react";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

import { headerContent } from "./HeaderContent";
import { sendGTMEvent } from "@next/third-parties/google";

type HeaderDesktopProps = {
  onOpenPhones: (anchor: HTMLElement | null) => void;
  onClosePhones: () => void;
  onOpenLocation: (anchor: HTMLElement | null) => void;
  onCloseLocation: () => void;
  onOpenContact: () => void;
};

const HeaderDesktop: FC<HeaderDesktopProps> = ({
  onOpenPhones,
  onClosePhones,
  onOpenLocation,
  onCloseLocation,
  onOpenContact
}) => {
  const content = headerContent;
  const [isOverHero, setIsOverHero] = useState(true);
  const actionsRef = useRef<HTMLDivElement>(null);

  // In --hero both popups must open from the same spot (the header's right
  // edge) instead of trailing whichever button was hovered; --docked keeps
  // each popup anchored to its own trigger button.
  const resolveAnchor = (button: HTMLElement) => (isOverHero ? actionsRef.current : button);

  useEffect(() => {
    const onScroll = () => {
      setIsOverHero((window.scrollY || document.documentElement.scrollTop) <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!content.section_check) return null;

  return (
    <header className={`headerDesktop ${isOverHero ? "headerDesktop--hero" : "headerDesktop--docked"}`}>
      <div className="headerDesktop__bar">
        <a href="#home" className="headerDesktop__logoLink">
          <div className="headerDesktop__logo">
            <ImgContainer className="headerDesktop__logo" image={content.logo} alt={content.logo.alt} />
          </div>
          <span className="headerDesktop__logoDivider" aria-hidden="true" />
          <span className="headerDesktop__brand">{content.brandLabel}</span>
        </a>

        <div className="headerDesktop__actions" ref={actionsRef}>
          <ButtonDefault
            className="headerDesktop__ghost"
            styling="ghost"
            theme="light"
            icon={content.phones.icon}
            positionIcon="left"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: content.phones.label, title: content.phones.label, target: "" }}
            onMouseEnter={isOverHero ? (e) => onOpenPhones(resolveAnchor(e.currentTarget)) : undefined}
            onMouseLeave={isOverHero ? onClosePhones : undefined}
            onFocus={(e) => onOpenPhones(resolveAnchor(e.currentTarget))}
            onBlur={onClosePhones}
            onClick={!isOverHero ? (e) => onOpenPhones(resolveAnchor(e.currentTarget)) : undefined}
          />

          <ButtonDefault
            className="headerDesktop__ghost"
            styling="ghost"
            theme="light"
            icon={content.location.icon}
            positionIcon="left"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: content.location.label, title: content.location.label, target: "" }}
            onMouseEnter={isOverHero ? (e) => onOpenLocation(resolveAnchor(e.currentTarget)) : undefined}
            onMouseLeave={isOverHero ? onCloseLocation : undefined}
            onFocus={(e) => onOpenLocation(resolveAnchor(e.currentTarget))}
            onBlur={onCloseLocation}
            onClick={!isOverHero ? (e) => onOpenLocation(resolveAnchor(e.currentTarget)) : undefined}
          />

          <LinkDefault
            href="#"
            className="headerDesktop__cta"
            title={content.cta.text}
            onClick={(event) => {
              event.preventDefault();
              sendGTMEvent({ event: "button_clicked_garantir_proposta", value: "garantir_proposta" });
              onOpenContact();
            }}
          >
            {content.cta.text}
          </LinkDefault>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
