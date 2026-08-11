"use client";

import "./ModelTabs.scss";
import React, { FC, useState } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import HiddenHeadings from "@/components/SEO/HiddenHeadings/HiddenHeadings";
import { sendGTMEvent } from "@next/third-parties/google";
import ProposalDrawer from "@/components/ProposalDrawer/ProposalDrawer";
import { proposalDrawerContent } from "@/components/ProposalDrawer/ProposalDrawerContent";

import { modelTabsContent } from "./ModelTabsContent";

type ModelTabsProps = {
  debug?: boolean;
};

const ModelTabs: FC<ModelTabsProps> = ({ debug = false }) => {
  const content = modelTabsContent;
  const [proposalOpen, setProposalOpen] = useState(false);
  const [active, setActive] = useState(0);

  if (!content || !content.section_check) return null;

  const activeTab = content.tabs[active];

  return (
    <SectionDefault className="modelTabs" debug={debug}>
      <HiddenHeadings headings={content.seo_headings} />

      <h2 className="modelTabs__title">{content.title}</h2>

      <div className="modelTabs__tabs" role="tablist">
        {content.tabs.map((tab, index) => (
          <ButtonDefault
            key={tab.id}
            styling="filled"
            theme="light"
            role="tab"
            aria-selected={index === active}
            className={`modelTabs__tab ${index === active ? "modelTabs__tab--active" : ""}`}
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: tab.tabLabel, title: tab.tabLabel, target: "" }}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      <div className="modelTabs__hero">
        <div className="modelTabs__heroContent">
          <p className="modelTabs__eyebrow">{activeTab.eyebrow}</p>
          <div className="modelTabs__heroTextGroup">
            <h3 className="modelTabs__heroTitle">
              {activeTab.title.split("\n").map((line, index) => (
                <React.Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h3>
            <p className="modelTabs__description">{activeTab.description}</p>
          </div>
          <div className="modelTabs__ctas">
            <ButtonDefault
              styling="filled"
              theme="dark"
              variantLink={{ type: "button" }}
              data={{ type: "", value: "", url: "", name: activeTab.ctaPrimary, title: activeTab.ctaPrimary, target: "" }}
              onClick={() => {
                sendGTMEvent({ event: "button_clicked_garantir_proposta", value: "garantir_proposta" });
                setProposalOpen(true);
              }}
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

      <ProposalDrawer open={proposalOpen} data={proposalDrawerContent} onClose={() => setProposalOpen(false)} />
    </SectionDefault>
  );
};

export default ModelTabs;
