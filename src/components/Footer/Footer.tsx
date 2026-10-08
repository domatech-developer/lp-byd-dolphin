import "./Footer.scss";
import { FC } from "react";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";
import TextDefault from "@/components/TextDefault/TextDefault";

import { footerContent } from "./FooterContent";
import { sendGTMEvent } from "@next/third-parties/google";

const Footer: FC = () => {
  const content = footerContent;

  if (!content || !content.section_check) return null;

  const { title, models, description, contact, copyright, credits_label, credits_link, credits_logo } = content;

  return (
    <footer className="footer">
      <div className="footer__container">
        {title && <TextDefault className="footer__title" text={title} />}

        {models.length > 0 && (
          <ul className="footer__models">
            {models.map((model, index) => (
              <li className="footer__modelItem" key={`${model.name || "model"}-${index}`}>
                <LinkDefault
                  className="footer__modelCard"
                  href={model.url || "#"}
                  target={model.target || ""}
                  title={model.name || ""}
                >
                  <ImgContainer className="footer__modelImage" image={model.image} alt={model.image?.alt} />
                </LinkDefault>
                {model.name && (
                  <span className="footer__modelName">
                    {model.badge && <span className="footer__modelBadge">{model.badge}</span>}
                    {model.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        <hr className="footer__divider" />

        <div className="footer__content">
          {description && <TextDefault className="footer__description" text={description} />}
          <br />
          {contact && <TextDefault className="footer__description" text={contact} />}
        </div>
      </div>

      <div className="footer__bottomBar">
        <div className="footer__container footer__container--bottom">
          <TextDefault className="footer__copyright" text={copyright} />

          <div className="footer__credits">
            <span className="footer__creditsLabel">{credits_label || "Feito por:"}</span>
            <a
              className="footer__creditsLink"
              href={credits_link?.url || "https://www.domatech.com.br"}
              target={credits_link?.target || "_blank"}
              rel="noreferrer"
              title={credits_logo?.title || "Domatech"}
              onClick={() => {
                sendGTMEvent({ event: "button_clicked_feito_por_domatech", value: "clicou_logo_domatech" });
              }}
            >
              <div className="footer__creditsLogo">
                <img
                  className="footer__creditsLogo__img"
                  src={credits_logo?.url || "/icons/domatech-light.svg"}
                  alt={credits_logo?.alt || "Domatech"}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
