"use client";
import "./InputPhone.scss";
import { ComponentProps } from "react";
import InputMask from "@mona-health/react-input-mask";
import ImgContainer from "@/components/ImageContainer/ImageContainer";

type InputPhoneProps = Omit<ComponentProps<typeof InputMask>, "mask"> & {
  label?: string;
  erroMsg?: string;
  invalid?: boolean;
  fullSize?: string;
};

const InputPhone: React.FC<InputPhoneProps> = ({ id, label, value, erroMsg, invalid, fullSize = "w-100", ...props }) => {
  return (
    <div className={`inputPhone ${invalid && "inputPhone--invalid"} ${fullSize}`}>
      <label htmlFor={id} className="inputPhone__label">
        {label}
      </label>
      <InputMask
        id={id}
        maskPlaceholder={null}
        mask={value?.length < 15 ? "(99) 9999-99999" : "(99) 99999-9999"}
        autoComplete="one-time-code"
        type="tel"
        value={value}
        className="inputPhone__element"
        {...props}
      />
      {invalid && (
        <div className="inputPhone__helpContainer">
          <ImgContainer className="inputPhone__helpIcon" image={{ url: "/icons/alert.svg", alt: "Alerta" }} />
          <span className="inputPhone__helpText">{erroMsg}</span>
        </div>
      )}
    </div>
  );
};

export default InputPhone;
