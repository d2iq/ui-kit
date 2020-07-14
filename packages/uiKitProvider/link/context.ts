import React from "react";
import { LinkComponent } from "../../link/types";

export const LinkComponentContext = React.createContext<
  LinkComponent | undefined
>(undefined);
