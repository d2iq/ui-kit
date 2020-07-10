import React from "react";
import { LinkComponent } from "../../link/types";

export const LinkContext = React.createContext<LinkComponent | undefined>(
  undefined
);
