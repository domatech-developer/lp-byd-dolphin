"use client";

import "./Hero.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";

import { heroContent } from "./HeroContent";

type HeroProps = {
  debug?: boolean;
};

const Hero: FC<HeroProps> = ({ debug = false }) => {
  const content = heroContent;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!content || !content.section_check) return null;

  const total = content.models.length;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  const railModels = content.models
    .map((model, index) => ({ model, index }))
    .filter((item) => item.index !== activeIndex)
    .sort((a, b) => {
      const distA = (a.index - activeIndex + total) % total;
      const distB = (b.index - activeIndex + total) % total;
      return distA - distB;
    });

  return (
    <SectionDefault className="hero" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <div className="hero__background">
        {content.models.map((model, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={model.id} className={`hero__backgroundLayer ${isActive ? "hero__backgroundLayer--active" : ""}`}>
              {model.backgroundVideo ? (
                <video
                  className="hero__backgroundLayer__media"
                  src={model.backgroundVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : model.backgroundImage ? (
                <picture>
                  {model.backgroundImage.mobileUrl && (
                    <source media="(max-width: 768px)" srcSet={model.backgroundImage.mobileUrl} />
                  )}
                  <img
                    className="hero__backgroundLayer__media"
                    src={model.backgroundImage.url}
                    alt={model.backgroundImage.alt}
                  />
                </picture>
              ) : null}
            </div>
          );
        })}
      </div>

      <button type="button" className="hero__navArrow" aria-label={content.arrowAriaLabel} onClick={goNext}>
        <div className="hero__navArrow__iconContainer">
          <img className="hero__navArrow__icon" src="/icons/arrow-right-white-nav.svg" alt="" />
        </div>
      </button>

      {content.models.map((model, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={model.id} className={`hero__panel ${isActive ? "hero__panel--active" : ""}`} aria-hidden={!isActive}>
            <div className="hero__panelContent">
              <div className="hero__info">
                <span className="hero__eyebrow">{content.eyebrow}</span>

                <div className="hero__heading">
                  <h1 className="hero__title">{model.name}</h1>
                  <p className="hero__description">{model.description}</p>
                </div>

                <ButtonDefault
                  className="hero__cta"
                  styling="filled"
                  theme="light"
                  variantLink={{ type: "link" }}
                  data={{ type: "", value: "", url: model.ctaUrl, name: model.ctaLabel, title: model.ctaLabel, target: "_blank" }}
                />
              </div>

              <div className="hero__pagination">
                <span className="hero__paginationLabel">
                  {index + 1}/{total}
                </span>
                <div className="hero__paginationTrack">
                  <div className="hero__paginationBar" style={{ width: `${((index + 1) / total) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="hero__rail">
        {railModels.map(({ model, index }, railIndex) => (
          <button key={model.id} type="button" className="hero__railCard" onClick={() => setActiveIndex(index)}>
            <div className="hero__railImage">
              {model.railImage.bgUrl ? (
                <img className="hero__railImage__bg" src={model.railImage.bgUrl} alt="" style={model.railCrop} />
              ) : (
                <div className="hero__railImage__bg hero__railImage__bg--solid" />
              )}
              <img
                className="hero__railImage__cutout"
                src={model.railImage.transparentUrl}
                alt={model.railImage.alt}
                style={model.railCrop}
              />
            </div>

            <div className="hero__railInfo">
              <span className="hero__railName">{model.railLabel}</span>
              {railIndex === 0 && <span className="hero__railNext">{content.nextLabel}</span>}
            </div>
          </button>
        ))}
      </div>
    </SectionDefault>
  );
};

export default Hero;
