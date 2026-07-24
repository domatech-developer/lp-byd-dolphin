"use client";

import "./ModelTabs.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";

import { modelTabsContent } from "./ModelTabsContent";

type ModelTabsProps = {
  debug?: boolean;
};

const ModelTabs: FC<ModelTabsProps> = ({ debug = false }) => {
  const content = modelTabsContent;
  const [active, setActive] = useState(0);

  if (!content || !content.section_check) return null;

  const activeTab = content.tabs[active];

  return (
    <SectionDefault className="modelTabs" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <h2 className="modelTabs__title">{content.title}</h2>

      <div className="modelTabs__tabs" role="tablist">
        {content.tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`modelTabs__tab ${index === active ? "modelTabs__tab--active" : ""}`}
            onClick={() => setActive(index)}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      <div className="modelTabs__hero">
        <div className="modelTabs__heroContent">
          <p className="modelTabs__eyebrow">{activeTab.eyebrow}</p>
          <h3 className="modelTabs__heroTitle">
            {activeTab.title.split("\n").map((line, index) => (
              <React.Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h3>
          <p className="modelTabs__description">{activeTab.description}</p>
          <div className="modelTabs__ctas">
            <ButtonDefault
              styling="filled"
              theme="dark"
              variantLink={{ type: "button" }}
              data={{ type: "", value: "", url: "", name: activeTab.ctaPrimary, title: activeTab.ctaPrimary, target: "" }}
            />
            <ButtonDefault
              styling="outline"
              theme="dark"
              icon="arrow-right-black-thin"
              variantLink={{ type: "link" }}
              data={{
                type: "",
                value: "",
                url: activeTab.ctaSecondary.url,
                name: activeTab.ctaSecondary.text,
                title: activeTab.ctaSecondary.text,
                target: activeTab.ctaSecondary.target || ""
              }}
            />
          </div>
        </div>

        <div className="modelTabs__heroImage">
          <ImgContainer key={activeTab.id} className="modelTabs__heroImage" image={activeTab.image} alt={activeTab.image.alt} />
        </div>

        <img className="modelTabs__watermark" src="/icons/byd-watermark.svg" alt="" aria-hidden="true" />
      </div>
    </SectionDefault>
  );
};

export default ModelTabs;
