import * as React from "react";
import { cx } from "emotion";
import { darkMode } from "../../shared/styles/styleUtils";
import { sidebar, sidebarAnimator } from "../style";

export interface SidebarProps {
  children: React.ReactElement<HTMLElement> | string;
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

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
    const classNames = cx(sidebar, darkMode);

    return (
      <div className={sidebarAnimator(isOpen)}>
        <nav className={classNames}>{children}</nav>
      </div>
    );
  }
}

export default Sidebar;
