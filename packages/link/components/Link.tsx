import React from "react";
import { cx } from "@emotion/css";
import ResetLink from "./ResetLink";
import { ExpandedLinkProps } from "../types";
import { defaultLink } from "../style";

const Link = ({ children, className, ...other }: ExpandedLinkProps) => (
  <ResetLink className={cx(defaultLink, className)} {...other}>
    {children}
  </ResetLink>
);

export default Link;
