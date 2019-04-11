import * as React from "react";
import { cx, css } from "emotion";
import styled from "@emotion/styled";
import { darkMode } from "../../shared/styles/styleUtils";
import { sidebar, sidebarAnimator } from "../style";
import { greyDark } from "../../design-tokens/build/js/designTokens";
import { atMediaUp } from "../../shared/styles/breakpoints";
import { isHexDark } from "../../shared/styles/color";

export interface SidebarProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  theme: {
    sidebarBackgroundColor?: string;
    sidebarWidth?: string;
  };
}

const sidebarWidths = {
  default: "240px",
  large: "280px"
};
const layoutBreakpoint = "large";

const sidebarWidth = css`
  width: ${sidebarWidths.default};

  ${atMediaUp[layoutBreakpoint](css`
    width: ${sidebarWidths[layoutBreakpoint]};
  `)};
`;

const sidebarAnimatorWidth = (isOpen: boolean) => css`
  width: ${isOpen ? sidebarWidths.default : 0};

  ${atMediaUp[layoutBreakpoint](css`
    width: ${isOpen ? sidebarWidths[layoutBreakpoint] : 0};
  `)};
`;

class Sidebar extends React.PureComponent<SidebarProps, {}> {
  static defaultProps = {
    theme: {}
  };
  public componentWillReceiveProps(nextProps: SidebarProps) {
    const { onOpen, onClose } = this.props;

    if (nextProps.isOpen && onOpen) {
      onOpen();
    } else if (!nextProps.isOpen && onClose) {
      onClose();
    }
  }

  public render() {
    const { children, isOpen } = this.props;
    const divClassNames = sidebarAnimator;

    const Sidebar = styled("div")`
      background-color: ${props =>
        props.theme.sidebarBackgroundColor || greyDark};
      ${props =>
        props.theme.sidebarWidth
          ? "width: " + props.theme.sidebarWidth
          : sidebarAnimatorWidth(isOpen)};
    `;

    const Nav = styled("nav")`
      ${props =>
        props.theme.sidebarWidth ? "width: " + props.theme.sidebarWidth : ""};
    `;

    const navClassNames = cx(sidebar, sidebarWidth, {
      [sidebarWidth]: Boolean(
        !(this.props.theme && this.props.theme.sidebarWidth)
      ),
      [darkMode]: Boolean(
        !(this.props.theme && this.props.theme.sidebarBackgroundColor) ||
          (this.props.theme.sidebarBackgroundColor &&
            isHexDark(this.props.theme.sidebarBackgroundColor))
      )
    });
    return (
      <Sidebar className={divClassNames}>
        <Nav className={navClassNames}>{children}</Nav>
      </Sidebar>
    );
  }
}

export default Sidebar;
