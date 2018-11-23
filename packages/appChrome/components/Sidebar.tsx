import * as React from "react";
import { cx, css } from "emotion";
import styled from "react-emotion";
import { darkMode } from "../../shared/styles/styleUtils";
import { sidebar, sidebarAnimator } from "../style";
import { greyDark } from "../../design-tokens/build/js/designTokens";
import { atMediaUp } from "../../shared/styles/breakpoints";

export interface SidebarProps {
  children: React.ReactElement<HTMLElement> | string;
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
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
    const navClassNames = cx(sidebar, sidebarWidth, darkMode);
    const divClassNames = cx(sidebarAnimator);

    const Sidebar = styled("div")`
      background-color: ${props => props.theme.backgroundColor || greyDark};
      ${props =>
        props.theme.width
          ? "width: " + props.theme.width
          : sidebarAnimatorWidth(isOpen)};
    `;

    const Nav = styled("nav")`
      ${props =>
        props.theme.width ? "width: " + props.theme.width : sidebarWidth};
    `;

    return (
      <Sidebar className={divClassNames}>
        <Nav className={navClassNames}>{children}</Nav>
      </Sidebar>
    );
  }
}

export default Sidebar;
