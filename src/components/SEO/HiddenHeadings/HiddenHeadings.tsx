import "./HiddenHeadings.scss";
import { FC } from "react";
import { HiddenHeadings as HiddenHeadingsType } from "./HiddenHeadings.type";

interface HiddenHeadingsProps {
  headings?: HiddenHeadingsType[];
}

const HiddenHeadings: FC<HiddenHeadingsProps> = ({ headings }) => {
  if (!headings?.length) return null;
  return (
    <div className="hiddenHeadings">
      {headings.map((h, i) => {
        const Tag = h.tag;
        return <Tag key={i}>{h.text}</Tag>;
      })}
    </div>
  );
};

export default HiddenHeadings;
