"use client";

import "./InfoModal.scss";
import { FC, useEffect } from "react";
import { useFloating, flip, offset, shift, autoUpdate } from "@floating-ui/react";

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
      <button type="button" className="infoModal__backdrop" aria-label="Fechar" tabIndex={open ? 0 : -1} onClick={onClose} />

      <div
        className="infoModal__card"
        ref={refs.setFloating}
        style={anchorEl ? floatingStyles : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="infoModal__header">
          <button type="button" className="infoModal__back" aria-label="Voltar" onClick={onClose}>
            <img src="/icons/chevron-left.svg" alt="" aria-hidden="true" />
          </button>
          <p className="infoModal__title">{data.title}</p>
          <button type="button" className="infoModal__close" aria-label="Fechar" onClick={onClose}>
            <img src="/icons/close-black.svg" alt="" aria-hidden="true" />
          </button>
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
