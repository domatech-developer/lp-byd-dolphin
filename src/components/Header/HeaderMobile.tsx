"use client";

import "./HeaderMobile.scss";
import { FC, useEffect, useState } from "react";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

import { headerContent } from "./HeaderContent";
import { footerContent } from "@/components/Footer/FooterContent";

type HeaderMobileProps = {
  onOpenPhones: (event: React.SyntheticEvent<HTMLElement>) => void;
  onOpenLocation: (event: React.SyntheticEvent<HTMLElement>) => void;
  onOpenContact: () => void;
};

const HeaderMobile: FC<HeaderMobileProps> = ({ onOpenPhones, onOpenLocation, onOpenContact }) => {
  const content = headerContent;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!content.section_check) return null;

  const openPhones = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(false);
    onOpenPhones(event);
  };

  const openLocation = (event: React.MouseEvent<HTMLElement>) => {
    setMenuOpen(false);
    onOpenLocation(event);
  };

  const openContact = () => {
    setMenuOpen(false);
    onOpenContact();
  };

  return (
    <>
      <header className="headerMobile__top">
        <a href="#home" className="headerMobile__logoLink">
          <img className="headerMobile__logo" src={content.logoMobile.url} alt={content.logoMobile.alt} />
        </a>

        <ButtonDefault
          className="headerMobile__toggle"
          styling="ghost"
          theme="light"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className="headerMobile__toggleBar headerMobile__toggleBar--top" />
          <span className="headerMobile__toggleBar headerMobile__toggleBar--bottom" />
        </ButtonDefault>
      </header>

      <div className="headerMobile__bottom">
        <ButtonDefault
          className="headerMobile__ghost"
          styling="ghost"
          theme="light"
          icon={content.phones.icon}
          positionIcon="left"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: content.phones.label, title: content.phones.label, target: "" }}
          onClick={openPhones}
        />

        <span className="headerMobile__divider" aria-hidden="true" />

        <ButtonDefault
          className="headerMobile__iconButton"
          styling="ghost"
          theme="light"
          circular
          icon={content.location.icon}
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
          aria-label={content.location.label}
          onClick={openLocation}
        />

        <ButtonDefault
          className="headerMobile__cta"
          styling="filled"
          theme="light"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: content.cta.text, title: content.cta.text, target: "" }}
          onClick={openContact}
        />
      </div>

      <div className={`headerMenu${menuOpen ? " headerMenu--open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu">
        <ButtonDefault
          className="headerMenu__backdrop"
          styling="ghost"
          theme="light"
          variantLink={{ type: "button" }}
          data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
          aria-label="Fechar menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <div className="headerMenu__panel">
          <div className="headerMenu__content">
            <div className="headerMenu__headSection">
              <div className="headerMenu__head">
                <img className="headerMenu__logo" src={content.logoMobile.url} alt={content.logoMobile.alt} />
                <ButtonDefault
                  className="headerMenu__close"
                  styling="ghost"
                  theme="light"
                  circular
                  icon="close-white"
                  variantLink={{ type: "button" }}
                  data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
                  aria-label="Fechar menu"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              <span className="headerMenu__divider" aria-hidden="true" />
            </div>

            <div className="headerMenu__main">
              <p className="headerMenu__mainTitle">{content.menuTitle}</p>

              <div className="headerMenu__actions">
                <ButtonDefault
                  className="headerMobile__ghost"
                  styling="ghost"
                  theme="light"
                  icon={content.phones.icon}
                  positionIcon="left"
                  variantLink={{ type: "button" }}
                  data={{ type: "", value: "", url: "", name: content.phones.label, title: content.phones.label, target: "" }}
                  onClick={openPhones}
                />
                <ButtonDefault
                  className="headerMobile__ghost"
                  styling="ghost"
                  theme="light"
                  icon={content.location.icon}
                  positionIcon="left"
                  variantLink={{ type: "button" }}
                  data={{ type: "", value: "", url: "", name: content.location.label, title: content.location.label, target: "" }}
                  onClick={openLocation}
                />
              </div>

              <ButtonDefault
                className="headerMobile__cta headerMenu__cta"
                styling="filled"
                theme="light"
                variantLink={{ type: "button" }}
                data={{ type: "", value: "", url: "", name: content.cta.text, title: content.cta.text, target: "" }}
                onClick={openContact}
              />
            </div>

            <span className="headerMenu__divider" aria-hidden="true" />

            <ul className="headerMenu__models">
              {footerContent.models.map((model) => (
                <li className="headerMenu__modelItem" key={model.name}>
                  <a className="headerMenu__modelCard" href={model.url || "#"} target={model.target}>
                    <ImgContainer className="headerMenu__modelImage" image={model.image} alt={model.image?.alt} />
                  </a>
                  {model.name && (
                    <span className="headerMenu__modelName">
                      {model.badge && <span className="headerMenu__modelBadge">{model.badge}</span>}
                      {model.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="headerMenu__footer">
            <img className="headerMenu__footerGlow" src="/images/header/menu-glow.svg" alt="" aria-hidden="true" />

            <div className="headerMenu__footerContent">
              <p className="headerMenu__footerTitle">{content.menuFooter.title}</p>
              <a
                className="headerMenu__footerLink"
                href={content.menuFooter.linkUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{content.menuFooter.linkLabel}</span>
                <img className="headerMenu__footerLinkIcon" src="/icons/caret-right-white.svg" alt="" aria-hidden="true" />
              </a>
            </div>

            <div className="headerMenu__social">
              {content.menuFooter.socials.map((social) => (
                <a
                  key={social.name}
                  className="headerMenu__socialLink"
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <img className="headerMenu__socialIcon" src={social.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
