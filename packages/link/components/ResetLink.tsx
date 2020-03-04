import React from "react";
import { cx } from "emotion";
import { LinkProps } from "../types";
import { linkReset } from "../../shared/styles/styleUtils/resets/linkReset";

const ResetLink: React.StatelessComponent<LinkProps> = ({
  children,
  className,
  href,
  openInNewTab,
  target,
  url,
  ...other
}) => (
  <a
    href={href || url}
    target={!target && openInNewTab ? "_blank" : target}
    className={cx(linkReset, className)}
    // https://web.dev/external-anchors-use-rel-noopener/
    rel={target === "_blank" || openInNewTab ? "noopener" : undefined}
    {...other}
  >
    {children}
  </a>
);

export default ResetLink;
