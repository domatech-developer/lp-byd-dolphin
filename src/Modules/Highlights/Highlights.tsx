import "./Highlights.scss";
import React, { FC } from "react";
import SectionDefault from "@/components/SectionDefault/SectionDefault";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

import { highlightsContent } from "./HighlightsContent";

type HighlightsProps = {
  debug?: boolean;
};

const Highlights: FC<HighlightsProps> = ({ debug = false }) => {
  const content = highlightsContent;
  if (!content || !content.section_check) return null;

  const rows = [content.items.slice(0, 2), content.items.slice(2, 4)];

  return (
    <SectionDefault className="highlights" debug={debug}>
      {rows.map((row, rowIndex) => (
        <div className="highlights__row" key={rowIndex}>
          {row.map((item) => (
            <LinkDefault
              key={item.name}
              className={`highlights__card highlights__card--${item.size}`}
              href={item.url}
              target={item.target}
              title={item.name}
            >
              <ImgContainer className="highlights__image" image={item.image} alt={item.image.alt} />

              <div className="highlights__info">
                <span className="highlights__name">{item.name}</span>
                <span className="highlights__arrow" aria-hidden="true">
                  <div className="highlights__iconContainer">
                    <img className="highlights__icon" src="/icons/arrow-right-white-thin.svg" alt="" />
                  </div>
                </span>
              </div>
            </LinkDefault>
          ))}
        </div>
      ))}
    </SectionDefault>
  );
};

export default Highlights;
