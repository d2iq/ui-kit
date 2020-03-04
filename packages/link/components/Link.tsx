import React from "react";
import ResetLink from "./ResetLink";
import { LinkProps } from "../types";
import { defaultLink } from "../style";

const Link: React.StatelessComponent<LinkProps> = ({
  children,
  className,
  ...other
}) => (
  <ResetLink className={defaultLink} {...other}>
    {children}
  </ResetLink>
);

export default Link;
