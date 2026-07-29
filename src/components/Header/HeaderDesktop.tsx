"use client";

import "./HeaderDesktop.scss";
import { FC, useEffect, useState } from "react";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import LinkDefault from "@/components/LinkDefault/LinkDefault";

import { headerContent } from "./HeaderContent";

type HeaderDesktopProps = {
  onOpenPhones: (event: React.SyntheticEvent<HTMLElement>) => void;
  onClosePhones: () => void;
  onOpenLocation: (event: React.SyntheticEvent<HTMLElement>) => void;
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
          <img className="headerDesktop__logo" src={content.logo.url} alt={content.logo.alt} />
          <span className="headerDesktop__logoDivider" aria-hidden="true" />
          <span className="headerDesktop__brand">{content.brandLabel}</span>
        </a>

        <div className="headerDesktop__actions">
          <ButtonDefault
            className="headerDesktop__ghost"
            styling="ghost"
            theme="light"
            icon={content.phones.icon}
            positionIcon="left"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: content.phones.label, title: content.phones.label, target: "" }}
            onMouseEnter={onOpenPhones}
            onMouseLeave={onClosePhones}
            onFocus={onOpenPhones}
            onBlur={onClosePhones}
          />

          <ButtonDefault
            className="headerDesktop__ghost"
            styling="ghost"
            theme="light"
            icon={content.location.icon}
            positionIcon="left"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: content.location.label, title: content.location.label, target: "" }}
            onMouseEnter={onOpenLocation}
            onMouseLeave={onCloseLocation}
            onFocus={onOpenLocation}
            onBlur={onCloseLocation}
          />

          <LinkDefault
            href="#"
            className="headerDesktop__cta"
            title={content.cta.text}
            onClick={(event) => {
              event.preventDefault();
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
