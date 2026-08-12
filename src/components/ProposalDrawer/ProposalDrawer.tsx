"use client";

import "./ProposalDrawer.scss";
import { FC, useEffect } from "react";
import { useForm } from "@/hooks/useForm";
import InputText from "@/components/Inputs/InputText/InputText";
import InputPhone from "@/components/Inputs/InputPhone/InputPhone";
import InputSelect from "@/components/Inputs/InputSelect/InputSelect";
import CheckBoxDefault from "@/components/Inputs/CheckBoxDefault/CheckBoxDefault";
import ButtonDefault from "@/components/Buttons/ButtonDefault/ButtonDefault";
import { sendGTMEvent } from "@next/third-parties/google";

interface ContactOption {
  value: string;
  label: string;
  checked?: boolean;
}

interface ProposalDrawerProps {
  open: boolean;
  data?: any;
  onClose: () => void;
  onSubmit?: (values: Record<string, any>) => void;
}

const ProposalDrawer: FC<ProposalDrawerProps> = ({ open, data, onClose, onSubmit }) => {
  const cities: string[] = Array.isArray(data?.cities) ? data.cities.filter((c: unknown) => typeof c === "string") : [];
  const models: string[] = Array.isArray(data?.models) ? data.models.filter((m: unknown) => typeof m === "string") : [];
  const contactOptions: ContactOption[] = Array.isArray(data?.contact?.options) ? data.contact.options : [];
  const defaultChannels = contactOptions.filter((option) => option.checked).map((option) => option.value);

  const { form, loading, setLoading, changeState, validation } = useForm(
    {
      name: { value: "", invalid: false, errorLabel: "", required: true },
      email: { value: "", invalid: false, errorLabel: "", required: true },
      phone: { value: "", invalid: false, errorLabel: "", required: true },
      city: { value: "", invalid: false, errorLabel: "", required: true },
      model: { value: data?.defaultModel || models[0] || "", invalid: false, errorLabel: "", required: true },
      contactChannels: { value: defaultChannels, invalid: false, errorLabel: "", required: true },
      privacy: { value: false, invalid: false, errorLabel: "", required: true }
    },
    [open]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
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
      console.log("proposal-drawer-submit", values);
    }
    setLoading(false);
  };

  if (!data?.section_check) return null;

  return (
    <div className={`proposalDrawer${open ? " proposalDrawer--open" : ""}`} aria-hidden={!open}>
      <ButtonDefault
        className="proposalDrawer__backdrop"
        styling="ghost"
        theme="light"
        variantLink={{ type: "button" }}
        data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
        aria-label="Fechar formulário"
        onClick={onClose}
      />

      <aside className="proposalDrawer__panel" role="dialog" aria-modal="true" aria-labelledby="proposalDrawerTitle">
        <div className="proposalDrawer__content">
          <div className="proposalDrawer__header">
            <h2 id="proposalDrawerTitle" className="proposalDrawer__title">
              {data?.title}
            </h2>

            <ButtonDefault
              className="proposalDrawer__close"
              styling="ghost"
              theme="dark"
              circular
              icon="close-black"
              iconWidth={24}
              iconHeight={24}
              variantLink={{ type: "button" }}
              data={{ type: "", value: "", url: "", name: "", title: "", target: "" }}
              onClick={onClose}
              aria-label="Fechar formulário"
            />
          </div>

          <form className="proposalDrawer__form" onSubmit={handleSubmit} noValidate>
            <InputText
              id="proposalDrawer-name"
              type="text"
              placeholder={data?.fields?.name_placeholder}
              value={form.name.value}
              invalid={form.name.invalid}
              erroMsg={form.name.errorLabel}
              onChange={(e) => changeState("name", "value", e.target.value)}
            />

            <InputText
              id="proposalDrawer-email"
              type="email"
              placeholder={data?.fields?.email_placeholder}
              value={form.email.value}
              invalid={form.email.invalid}
              erroMsg={form.email.errorLabel}
              onChange={(e) => changeState("email", "value", e.target.value)}
            />

            <InputPhone
              id="proposalDrawer-phone"
              placeholder={data?.fields?.phone_placeholder}
              value={form.phone.value}
              invalid={form.phone.invalid}
              erroMsg={form.phone.errorLabel}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeState("phone", "value", e.target.value)}
            />

            <InputSelect
              id="proposalDrawer-city"
              label={data?.cityLabel}
              erroMsg={form.city.errorLabel}
              placeholder={data?.fields?.city_placeholder}
              options={cities}
              value={form.city.value}
              invalid={form.city.invalid}
              onChange={(e) => changeState("city", "value", e.target.value)}
            />

            <InputSelect
              id="proposalDrawer-model"
              label={data?.modelLabel}
              erroMsg={form.model.errorLabel}
              placeholder={data?.fields?.model_placeholder}
              options={models}
              value={form.model.value}
              invalid={form.model.invalid}
              onChange={(e) => changeState("model", "value", e.target.value)}
            />

            <div className="proposalDrawer__contactBlock">
              <p className="proposalDrawer__contactTitle">{data?.contact?.title}</p>

              <div className="proposalDrawer__checks">
                {contactOptions.map((option) => (
                  <CheckBoxDefault
                    key={option.value}
                    id={`proposalDrawer-channel-${option.value}`}
                    label={option.label}
                    erroMsg=""
                    checked={Array.isArray(form.contactChannels.value) && form.contactChannels.value.includes(option.value)}
                    onChange={() => toggleChannel(option.value)}
                  />
                ))}
              </div>

              <CheckBoxDefault
                id="proposalDrawer-privacy"
                label={data?.privacy?.label}
                erroMsg="Você precisa aceitar a política de privacidade."
                invalid={form.privacy.invalid}
                checked={Boolean(form.privacy.value)}
                onChange={(e) => changeState("privacy", "value", e.target.checked)}
              />
            </div>

            <button type="submit" className="proposalDrawer__submitTrap" tabIndex={-1} aria-hidden="true" />

            <ButtonDefault
              className="proposalDrawer__submit"
              styling="filled"
              theme="dark"
              variantLink={{ type: "button" }}
              data={{ type: "", value: "", url: "", name: data?.submit_label, title: data?.submit_label, target: "" }}
              disabled={loading}
              onClick={() => {
                handleSubmit();
                sendGTMEvent({ event: "button_clicked_envio_proposta", value: "envio_proposta" });
              }}
            />
          </form>
        </div>
      </aside>
    </div>
  );
};

export default ProposalDrawer;
