import React from "react";
import { cx } from "@emotion/css";
import { ExpandedLinkProps } from "../types";
import { linkReset } from "../../shared/styles/styleUtils/resets/linkReset";
import UnstyledLink from "./UnstyledLink";

const ResetLink = ({ className, children, ...other }: ExpandedLinkProps) => (
  <UnstyledLink className={cx(linkReset, className)} {...other}>
    {children}
  </UnstyledLink>
);

export { ResetLink as default };
