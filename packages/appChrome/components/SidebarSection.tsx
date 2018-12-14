import * as React from "react";
import { cx } from "emotion";
import styled from "react-emotion";
import { sidebarSectionHeader, sidebarSectionList } from "../style";
import {
  tintText,
  textSize,
  textWeight,
  listReset,
  margin,
  flex
} from "@dcos/ui-kit-shared/dist/styles/styleUtils";
import { greyLightDarken3 } from "@dcos/ui-kit-design-tokens/dist/build/js/designTokens";
import { spaceSizes } from "@dcos/ui-kit-shared/dist/styles/styleUtils/modifiers/modifierUtils";

export interface SidebarSectionProps {
  children:
    | React.ReactElement<HTMLElement>
    | Array<React.ReactElement<HTMLElement>>;
  label?: React.ReactElement<HTMLElement> | string;
}

class SidebarSection extends React.PureComponent<SidebarSectionProps, {}> {
  public render() {
    const { label, children } = this.props;

    /* tslint:disable:no-string-literal */
    const H3 = styled("h3")`
      padding-left: ${props =>
        spaceSizes[props.theme.sidebarHeaderPaddingHor] || spaceSizes["l"]};
      padding-right: ${props =>
        spaceSizes[props.theme.sidebarHeaderPaddingHor] || spaceSizes["l"]};
      padding-bottom: ${props =>
        spaceSizes[props.theme.sidebarHeaderPaddingVert] || spaceSizes["s"]};
      padding-top: ${props =>
        spaceSizes[props.theme.sidebarHeaderPaddingVert] || spaceSizes["s"]};
    `;
    /* tslint:enable:no-string-literal */

    return (
      <div>
        {label && (
          <H3
            className={cx(
              sidebarSectionHeader,
              flex({ align: "center" }),
              tintText(greyLightDarken3),
              textSize("default"),
              textWeight("medium"),
              margin("bottom", "none"),
              margin("top", "none")
            )}
          >
            {label}
          </H3>
        )}
        <ul className={cx(sidebarSectionList, listReset)}>{children}</ul>
      </div>
    );
  }
}

export default SidebarSection;
