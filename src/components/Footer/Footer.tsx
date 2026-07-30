import "./Footer.scss";
import { FC } from "react";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

import { footerContent } from "./FooterContent";

const Footer: FC = () => {
  const content = footerContent;

  if (!content || !content.section_check) return null;

  const { title, models, description, contact, copyright, credits_label, credits_link, credits_logo } = content;

  return (
    <footer className="footer">
      <div className="footer__container">
        {title && <h3 className="footer__title">{title}</h3>}

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
          {description && <p className="footer__description">{description}</p> } 
          <br />
          {contact && <p className="footer__description">{contact}</p>}
        </div>
      </div>

      <div className="footer__bottomBar">
        <div className="footer__container footer__container--bottom">
          <p className="footer__copyright">{copyright}</p>

          <div className="footer__credits">
            <span className="footer__creditsLabel">{credits_label || "Feito por:"}</span>
            <a
              className="footer__creditsLink"
              href={credits_link?.url || "https://www.domatech.com.br"}
              target={credits_link?.target || "_blank"}
              rel="noreferrer"
              title={credits_logo?.title || "Domatech"}
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
