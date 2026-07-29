"use client";

import "./ContactDrawer.scss";
import { FC, useEffect } from "react";
import { useForm } from "@/hooks/useForm";
import InputText from "@/components/Inputs/InputText/InputText";
import InputPhone from "@/components/Inputs/InputPhone/InputPhone";
import InputSelect from "@/components/Inputs/InputSelect/InputSelect";
import CheckBoxDefault from "@/components/Inputs/CheckBoxDefault/CheckBoxDefault";

import { contactDrawerContent } from "./ContactDrawerContent";

type ContactDrawerProps = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (values: Record<string, any>) => void;
};

const ContactDrawer: FC<ContactDrawerProps> = ({ open, onClose, onSubmit }) => {
  const content = contactDrawerContent;
  const defaultChannels = content.contact.options.filter((option) => option.checked).map((option) => option.value);

  const { form, loading, setLoading, changeState, validation } = useForm(
    {
      name: { value: "", invalid: false, errorLabel: "", required: true },
      email: { value: "", invalid: false, errorLabel: "", required: true },
      phone: { value: "", invalid: false, errorLabel: "", required: true },
      city: { value: "", invalid: false, errorLabel: "", required: true },
      model: { value: content.defaultModel, invalid: false, errorLabel: "", required: true },
      contactChannels: { value: defaultChannels, invalid: false, errorLabel: "", required: true },
      privacy: { value: false, invalid: false, errorLabel: "", required: true }
    },
    [open]
  );

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const toggleChannel = (value: string) => {
    const current: string[] = Array.isArray(form.contactChannels.value) ? form.contactChannels.value : [];
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    changeState("contactChannels", "value", next);
  };

  const handleSubmit = (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    setLoading(true);

    if (!validation()) return;

    const values = Object.fromEntries(Object.entries(form).map(([key, field]) => [key, field.value]));

    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log("contact-drawer-submit", values);
    }
    setLoading(false);
  };

  if (!content.section_check) return null;

  return (
    <div className={`contactDrawer${open ? " contactDrawer--open" : ""}`} aria-hidden={!open}>
      <button type="button" className="contactDrawer__backdrop" aria-label="Fechar formulário" onClick={onClose} />

      <aside className="contactDrawer__panel" role="dialog" aria-modal="true" aria-labelledby="contactDrawerTitle">
        <div className="contactDrawer__content">
          <div className="contactDrawer__header">
            <h2 id="contactDrawerTitle" className="contactDrawer__title">
              {content.title}
            </h2>

            <button type="button" className="contactDrawer__close" onClick={onClose} aria-label="Fechar formulário">
              <img src="/icons/close-black.svg" alt="" aria-hidden="true" />
            </button>
          </div>

          <form className="contactDrawer__form" onSubmit={handleSubmit} noValidate>
            <InputText
              id="contactDrawer-name"
              type="text"
              placeholder={content.fields.name_placeholder}
              value={form.name.value}
              invalid={form.name.invalid}
              erroMsg={form.name.errorLabel}
              onChange={(e) => changeState("name", "value", e.target.value)}
            />

            <InputText
              id="contactDrawer-email"
              type="email"
              placeholder={content.fields.email_placeholder}
              value={form.email.value}
              invalid={form.email.invalid}
              erroMsg={form.email.errorLabel}
              onChange={(e) => changeState("email", "value", e.target.value)}
            />

            <InputPhone
              id="contactDrawer-phone"
              placeholder={content.fields.phone_placeholder}
              value={form.phone.value}
              invalid={form.phone.invalid}
              erroMsg={form.phone.errorLabel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeState("phone", "value", e.target.value)}
            />

            <InputSelect
              id="contactDrawer-city"
              label={content.cityLabel}
              erroMsg={form.city.errorLabel}
              placeholder={content.fields.city_placeholder}
              options={content.cities}
              value={form.city.value}
              invalid={form.city.invalid}
              onChange={(e) => changeState("city", "value", e.target.value)}
            />

            <InputSelect
              id="contactDrawer-model"
              label={content.modelLabel}
              erroMsg={form.model.errorLabel}
              placeholder={content.fields.model_placeholder}
              options={content.models}
              value={form.model.value}
              invalid={form.model.invalid}
              onChange={(e) => changeState("model", "value", e.target.value)}
            />

            <div className="contactDrawer__contactBlock">
              <p className="contactDrawer__contactTitle">{content.contact.title}</p>

              <div className="contactDrawer__checks">
                {content.contact.options.map((option) => (
                  <CheckBoxDefault
                    key={option.value}
                    id={`contactDrawer-channel-${option.value}`}
                    label={option.label}
                    erroMsg=""
                    checked={Array.isArray(form.contactChannels.value) && form.contactChannels.value.includes(option.value)}
                    onChange={() => toggleChannel(option.value)}
                  />
                ))}
              </div>

              <CheckBoxDefault
                id="contactDrawer-privacy"
                label={content.privacy.label}
                erroMsg="Você precisa aceitar a política de privacidade."
                invalid={form.privacy.invalid}
                checked={Boolean(form.privacy.value)}
                onChange={(e) => changeState("privacy", "value", e.target.checked)}
              />
            </div>

            <button type="submit" className="contactDrawer__submit" disabled={loading}>
              {content.submit_label}
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ContactDrawer;
