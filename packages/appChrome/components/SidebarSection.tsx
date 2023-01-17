import * as React from "react";
import { cx } from "@emotion/css";
import { sidebarSectionHeader, sidebarSectionList } from "../style";
import {
  tintText,
  textSize,
  textWeight,
  listReset,
  margin,
  flex
} from "../../shared/styles/styleUtils";
import { greyLightDarken3 } from "../../design-tokens/build/js/designTokens";
import { useTheme } from "@emotion/react";
import { AppChromeTheme } from "../types";

export interface SidebarSectionProps {
  children: React.ReactNode | React.ReactNode[];
  /**
   * Will appear in the header of the sidebar section
   */
  label?: React.ReactElement<HTMLElement> | string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const SidebarSection = ({
  label,
  children,
  "data-cy": dataCy = "sidebarSection"
}: SidebarSectionProps) => {
  const theme: AppChromeTheme = useTheme();

  return (
    <div data-cy={dataCy}>
      {label && (
        <h3
          className={cx(
            sidebarSectionHeader(theme),
            flex({ align: "center" }),
            tintText(greyLightDarken3),
            textSize("m"),
            textWeight("medium"),
            margin("bottom", "none"),
            margin("top", "none")
          )}
        >
          {label}
        </h3>
      )}
      <ul className={cx(sidebarSectionList, listReset)}>{children}</ul>
    </div>
  );
};

export default SidebarSection;
