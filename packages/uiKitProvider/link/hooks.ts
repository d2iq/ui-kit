import React from "react";

import { LinkComponentContext } from "./context";

export function useLink() {
  return React.useContext(LinkComponentContext);
}
