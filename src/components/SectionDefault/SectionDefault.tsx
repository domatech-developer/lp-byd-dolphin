import React, { FC } from "react";

type SectionDefaultProps = {
  className: string;
  children: React.ReactNode;
  debug?: boolean;
};

const SectionDefault: FC<SectionDefaultProps> = ({ className, children, debug = false, ...rest }) => {
  debug && console.log(className, { children });

  return (
    <section className={className} {...rest}>
      <div className={`${className}__container`}>{children}</div>
    </section>
  );
};

export default SectionDefault;
