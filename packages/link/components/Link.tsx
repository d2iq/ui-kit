import React from "react";
import ResetLink from "./ResetLink";
import { ExpandedLinkProps } from "../types";
import { defaultLink } from "../style";

const Link: React.StatelessComponent<ExpandedLinkProps> = ({
  children,
  className,
  ...other
}) => (
  <ResetLink className={defaultLink} {...other}>
    {children}
  </ResetLink>
);

export default Link;
