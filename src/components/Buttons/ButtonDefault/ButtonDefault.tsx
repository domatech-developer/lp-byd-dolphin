import { VariantButton } from "@/@types/variantButton";
import "./ButtonDefault.scss";
import { Icons } from "@/@types/icons";
import { ButtonVariants } from "@/@types/variants";
import LinkDefault from "@/components/LinkDefault/LinkDefault";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
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
  iconWidth?: number;
  iconHeight?: number;
  children?: ReactNode;
};

const ButtonDefault = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonDefaultProps>(function ButtonDefault(
  {
    disabled,
    circular,
    styling = "filled",
    theme = "dark",
    variantLink,
    data,
    icon,
    iconWidth,
    iconHeight,
    positionIcon = "",
    className: extraClassName,
    children,
    ...rest
  },
  ref
) {
  const { title, url, target = "" } = data;

  const className = [
    "buttonDefault",
    `buttonDefault--${styling}`,
    `buttonDefault--${theme}`,
    circular && "buttonDefault--circular",
    disabled && "buttonDefault--disabled",
    extraClassName
  ]
    .filter(Boolean)
    .join(" ");

  const iconContainerStyle: React.CSSProperties | undefined =
    iconWidth === undefined && iconHeight === undefined
      ? undefined
      : ({
          ...(iconWidth !== undefined && { "--button-icon-width": iconWidth }),
          ...(iconHeight !== undefined && { "--button-icon-height": iconHeight })
        } as React.CSSProperties);

  const renderIcon = () =>
    icon && (
      <div className="buttonDefault__iconContainer" style={iconContainerStyle}>
        <img className="buttonDefault__icon" src={`/icons/${icon}.svg`} alt="" aria-hidden="true" />
      </div>
    );

  const showIconLeft = positionIcon === "left" || positionIcon === "leftRight";
  const showIconRight = positionIcon === "right" || positionIcon === "leftRight" || positionIcon === "";

  const content = children ?? (
    <>
      {showIconLeft && renderIcon()}
      {title && <span className="buttonDefault__text">{title}</span>}
      {showIconRight && renderIcon()}
    </>
  );

  if (variantLink.type === "button") {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={className}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        title={title}
        {...rest}
      >
        {content}
      </button>
    );
  }

  return (
    <LinkDefault className={className} href={url} target={target} title={title} tabIndex={disabled ? -1 : 0} {...(rest as Record<string, unknown>)}>
      {content}
    </LinkDefault>
  );
});

export default ButtonDefault;
