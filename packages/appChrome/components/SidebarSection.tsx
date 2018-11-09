import * as React from "react";
import { cx } from "react-emotion";
import {
  appChromeInsetContent,
  sidebarItemHeight,
  sidebarSectionHeader,
  sidebarSectionList
} from "../style";
import {
  tintText,
  textSize,
  textWeight,
  listReset,
  margin,
  flex
} from "../../shared/styles/styleUtils";
import { greyLightDarken3 } from "../../shared/styles/design-tokens-dist/js/designTokens";

export interface SidebarSectionProps {
  children:
    | React.ReactElement<HTMLElement>
    | Array<React.ReactElement<HTMLElement>>;
  label?: React.ReactElement<HTMLElement> | string;
}

class SidebarSection extends React.PureComponent<SidebarSectionProps, {}> {
  public render() {
    const { label, children } = this.props;

    return (
      <div>
        {label && (
          <h3
            className={cx(
              appChromeInsetContent,
              sidebarSectionHeader,
              sidebarItemHeight,
              flex({ align: "center" }),
              tintText(greyLightDarken3),
              textSize("default"),
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
  }
}

export default SidebarSection;
