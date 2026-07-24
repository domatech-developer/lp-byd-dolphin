import { VariantButton } from "@/@types/variantButton";
import "./ButtonDefault.scss";
import { Icons } from "@/@types/icons";
import { ButtonVariants } from "@/@types/variants";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import { FC, ButtonHTMLAttributes } from "react";
import { LinkAcf } from "@/@types/link";
import { PositionIcon } from "@/@types/positionIcon";

type ButtonTheme = "dark" | "light";

type ButtonDefaultProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  styling?: ButtonVariants;
  theme?: ButtonTheme;
  circular?: boolean;
  disabled?: boolean;
  positionIcon?: PositionIcon;
  variantLink: VariantButton;
  data: LinkAcf;
  icon?: Icons;
};

const ButtonDefault: FC<ButtonDefaultProps> = ({
  disabled,
  circular,
  styling = "filled",
  theme = "dark",
  variantLink,
  data,
  icon,
  positionIcon = "",
  ...rest
}) => {
  const { title, url, target = "" } = data;

  const className = [
    "buttonDefault",
    `buttonDefault--${styling}`,
    `buttonDefault--${theme}`,
    circular && "buttonDefault--circular",
    disabled && "buttonDefault--disabled"
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {positionIcon === "leftRight" && icon && <img className="buttonDefault__icon" src={`/icons/${icon}.svg`} alt="" aria-hidden="true" />}
      <span className="buttonDefault__text">{title}</span>
      {icon && <img className="buttonDefault__icon" src={`/icons/${icon}.svg`} alt="" aria-hidden="true" />}
    </>
  );

  if (variantLink.type === "button") {
    return (
      <button type="button" className={className} disabled={disabled} tabIndex={disabled ? -1 : 0} title={title} {...rest}>
        {content}
      </button>
    );
  }

  return (
    <LinkDefault className={className} href={url} target={target} title={title} tabIndex={disabled ? -1 : 0} {...(rest as Record<string, unknown>)}>
      {content}
    </LinkDefault>
  );
};

export default ButtonDefault;
