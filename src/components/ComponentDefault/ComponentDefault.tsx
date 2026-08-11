import React, { FC } from "react";

type ComponentDefaultProps = {
  className: string;
  children?: React.ReactNode;
  check?: boolean;
  noContainer?: boolean;
  debug?: boolean;
} & React.ComponentProps<"div">;

const ComponentDefault: FC<ComponentDefaultProps> = ({
  className,
  children,
  check,
  noContainer = false,
  debug = false,
  ...rest
}) => {
  if (!check) return null;

  debug && console.log(className, { children });

  return (
    <div className={className} {...rest}>
      {noContainer ? children : <div className={`${className}__container`}>{children}</div>}
    </div>
  );
};

export default ComponentDefault;
