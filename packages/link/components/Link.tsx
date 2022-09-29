import React from "react";
import ResetLink from "./ResetLink";
import { ExpandedLinkProps } from "../types";
import { defaultLink } from "../style";

const Link = ({ children, className, ...other }: ExpandedLinkProps) => (
  <ResetLink className={defaultLink} {...other}>
    {children}
  </ResetLink>
);

export default Link;
