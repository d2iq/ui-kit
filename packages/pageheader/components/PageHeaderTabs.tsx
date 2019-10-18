import * as React from "react";
import { css } from "react-emotion";
import { spaceSizes } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import { pageHeaderPaddingSize } from "./PageHeader";

const PageHeaderTabs = ({ children }) => {
  return (
    <div
      className={css`
        flex-grow: 1;
        margin-left: -${spaceSizes[pageHeaderPaddingSize]};
        margin-right: -${spaceSizes[pageHeaderPaddingSize]};
      `}
    >
      {children}
    </div>
  );
};

export default PageHeaderTabs;
