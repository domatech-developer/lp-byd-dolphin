"use client";

import "./ModelTabs.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import TextDefault from "@/components/TextDefault/TextDefault";
import { sendGTMEvent } from "@next/third-parties/google";
import { whatsappUrl } from "@/utils/constants/whatsapp";
import { useModelSelection } from "@/provider/ModelSelectionProvider/ModelSelectionProvider";

import { modelTabsContent } from "./ModelTabsContent";

type ModelTabsProps = {
  debug?: boolean;
};

const ModelTabs: FC<ModelTabsProps> = ({ debug = false }) => {
  const content = modelTabsContent;
  const { activeId, setActiveId } = useModelSelection();

  if (!content || !content.section_check) return null;

  const activeTab = content.tabs.find((tab) => tab.id === activeId) ?? content.tabs[0];

  return (
    <SectionDefault className="modelTabs" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <TextDefault className="modelTabs__title" text={content.title} />

      <div className="modelTabs__tabs" role="tablist">
        {content.tabs.map((tab) => (
          <ButtonDefault
            key={tab.id}
            styling="filled"
            theme="light"
            role="tab"
            aria-selected={tab.id === activeId}
            className={`modelTabs__tab ${tab.id === activeId ? "modelTabs__tab--active" : ""}`}
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: tab.tabLabel, title: tab.tabLabel, target: "" }}
            onClick={() => setActiveId(tab.id)}
          />
        ))}
      </div>

      <div className="modelTabs__hero">
        <div className="modelTabs__heroContent">
          <TextDefault className="modelTabs__eyebrow" text={activeTab.eyebrow} />
          <div className="modelTabs__heroTextGroup">
            <TextDefault className="modelTabs__heroTitle" text={activeTab.title.replace(/\n/g, "<br/>")} />
            <TextDefault className="modelTabs__description" text={activeTab.description} />
          </div>
          <div className="modelTabs__ctas">
            <ButtonDefault
              styling="filled"
              theme="dark"
              icon="whatsapp-white"
              positionIcon="left"
              variantLink={{ type: "link" }}
              data={{ type: "", value: "", url: whatsappUrl, name: activeTab.ctaPrimary, title: activeTab.ctaPrimary, target: "_blank" }}
              onClick={() => {
                sendGTMEvent({ event: "button_clicked_garantir_proposta", value: "garantir_proposta" });
              }}
            />
            <ButtonDefault
              styling="outline"
              theme="dark"
              icon="arrow-right-black-thin"
              iconWidth={11}
              iconHeight={11}
              variantLink={{ type: "link" }}
              data={{
                type: "",
                value: "",
                url: activeTab.ctaSecondary.url,
                name: activeTab.ctaSecondary.text,
                title: activeTab.ctaSecondary.text,
                target: activeTab.ctaSecondary.target || ""
              }}
              onClick={() => {
                sendGTMEvent({ event: "button_clicked_conhecer_modelo", value: "conhecer_modelo" });
              }}
            />
          </div>
        </div>

        <div className="modelTabs__heroImage">
          <ImgContainer key={activeTab.id} className="modelTabs__heroImage" image={activeTab.image} alt={activeTab.image.alt} />
        </div>

        <div className="modelTabs__watermark" aria-hidden="true">
          <div className="modelTabs__iconContainer">
            <img className="modelTabs__icon" src="/icons/byd-watermark.svg" alt="" />
          </div>
        </div>
      </div>
    </SectionDefault>
  );
};

export default ModelTabs;
