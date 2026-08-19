import "./InputText.scss";
import { ComponentProps, forwardRef, ReactNode } from "react";
import ImgDefault from "@/components/ImgDefault/ImgDefault";

type InputProp = ComponentProps<"input"> & {
  label?: ReactNode;
  errorMsg?: string;
  invalid?: boolean;
  fullSize?: string;
};

const InputText = forwardRef<HTMLInputElement, InputProp>(
  ({ id, label, errorMsg, invalid = false, required = false, fullSize = "w-100", ...props }, ref) => {
    const inputId = id;
    const errorId = `${inputId}-error`;

    return (
      <div className={`inputText ${invalid ? "inputText--invalid" : ""} ${fullSize}`}>
        {label && (
          <label htmlFor={inputId} className="inputText__label">
            {label}
            {required && <span className="sr-only"> (obrigatório)</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className="inputText__element"
          aria-invalid={invalid ? "true" : "false"}
          aria-describedby={invalid ? errorId : undefined}
          required={required}
          {...props}
        />

        {invalid && (
          <div id={errorId} className="inputText__helpContainer" role="alert">
            <ImgDefault src="/icons/alert.svg" alt="" aria-hidden="true" className="inputText__helpIcon" />
            <span className="inputText__helpText">{errorMsg}</span>
          </div>
        )}
      </div>
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
