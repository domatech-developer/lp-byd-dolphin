"use client";

import "./InfoModal.scss";
import { FC, useEffect } from "react";
import { useFloating, flip, offset, shift, autoUpdate } from "@floating-ui/react";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";

export type InfoModalItem = {
  label: string;
  value: string;
  href?: string;
  target?: string;
};

export type InfoModalData = {
  title: string;
  columns?: 1 | 2;
  items: InfoModalItem[];
};

type InfoModalProps = {
  open: boolean;
  data: InfoModalData;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const InfoModal: FC<InfoModalProps> = ({ open, data, onClose, anchorEl, onMouseEnter, onMouseLeave }) => {
  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    placement: "bottom-end",
    middleware: [offset(12), flip({ padding: 16 }), shift({ padding: 16 })],
    elements: { reference: anchorEl || undefined },
    whileElementsMounted: autoUpdate
  });

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`infoModal${open ? " infoModal--open" : ""}${anchorEl ? " infoModal--anchored" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      aria-hidden={!open}
    >
      <ButtonDefault
        className="infoModal__backdrop"
        styling="ghost"
        theme="light"
        variantLink={{ type: "button" }}
        data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
        aria-label="Fechar"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <div
        className="infoModal__card"
        ref={refs.setFloating}
        style={anchorEl ? floatingStyles : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="infoModal__header">
          <ButtonDefault
            className="infoModal__back"
            styling="ghost"
            theme="dark"
            circular
            icon="chevron-left"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
            aria-label="Voltar"
            onClick={onClose}
          />
          <p className="infoModal__title">{data.title}</p>
          <ButtonDefault
            className="infoModal__close"
            styling="ghost"
            theme="dark"
            circular
            icon="close-black"
            variantLink={{ type: "button" }}
            data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
            aria-label="Fechar"
            onClick={onClose}
          />
        </div>

        <hr className="infoModal__divider" />

        <ul className={`infoModal__grid${data.columns === 1 ? " infoModal__grid--single" : ""}`}>
          {data.items.map((item, index) => (
            <li className="infoModal__item" key={`${item.label}-${index}`}>
              <span className="infoModal__itemLabel">{item.label}</span>
              {item.href ? (
                <a
                  className="infoModal__itemValue infoModal__itemValue--link"
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="infoModal__itemValue">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoModal;
