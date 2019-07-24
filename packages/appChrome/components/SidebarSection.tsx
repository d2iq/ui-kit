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
} from "../../shared/styles/styleUtils";
import { greyLightDarken3 } from "../../design-tokens/build/js/designTokens";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";

export interface SidebarSectionProps {
  children:
    | React.ReactElement<HTMLElement>
    | Array<React.ReactElement<HTMLElement>>;
  label?: React.ReactElement<HTMLElement> | string;
}

class SidebarSection extends React.PureComponent<SidebarSectionProps, {}> {
  public render() {
    const { label, children } = this.props;

    const H3 = styled("h3")`
      ${props => `
        padding-left: ${
          props.theme.sidebarHeaderPaddingHor
            ? spaceSizes[props.theme.sidebarHeaderPaddingHor]
            : spaceSizes.l
        };
        padding-right: ${
          props.theme.sidebarHeaderPaddingHor
            ? spaceSizes[props.theme.sidebarHeaderPaddingHor]
            : spaceSizes.l
        };
        padding-bottom: ${
          props.theme.sidebarHeaderPaddingVert
            ? spaceSizes[props.theme.sidebarHeaderPaddingVert]
            : spaceSizes.s
        };
        padding-top: ${
          props.theme.sidebarHeaderPaddingVert
            ? spaceSizes[props.theme.sidebarHeaderPaddingVert]
            : spaceSizes.s
        };

        `};
    `;

    return (
      <div data-cy="sidebarSection">
        {label && (
          <H3
            className={cx(
              sidebarSectionHeader,
              flex({ align: "center" }),
              tintText(greyLightDarken3),
              textSize("m"),
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
