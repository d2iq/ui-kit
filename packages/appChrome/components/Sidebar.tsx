import * as React from "react";
import { cx } from "@emotion/css";
import { ThemeProvider, useTheme } from "@emotion/react";
import { sidebar, sidebarAnimator, sidebarContainer } from "../style";
import { themeBgDisabled } from "../../design-tokens/build/js/designTokens";
import getCSSVarValue from "../../utilities/getCSSVarValue";
import { getResponsiveStyle } from "../../shared/styles/styleUtils";
import { AppChromeTheme } from "../types";
export interface SidebarProps {
  /**
   * Whether a sidebar items contents are visible
   */
  isOpen: boolean;
  /** Function that gets called when a sidebar item opens */
  onOpen?: () => void;
  /** Function that gets called when a sidebar item closes */
  onClose?: () => void;
  /** Children to render inside of the sidebar */
  children?: React.ReactNode;
  /**
   * Changes the background color for the entire sidebar
   */
  bgColor?: string;
  /**
   *  Changes the color for sidebar items on hover
   */
  hoverColor?: string;
  /**
   * Changes the color for sidebar items in an active selected state
   */
  activeColor?: string;
}

const defaultSidebarWidths = {
  default: "240px",
  large: "280px"
};

const StyledSidebar = ({ children, isOpen }: SidebarProps) => {
  const theme: AppChromeTheme = useTheme();

  return (
    <div
      className={cx(
        sidebarContainer(theme, isOpen),
        getResponsiveStyle("width", isOpen ? theme.sidebarWidth : 0),
        sidebarAnimator
      )}
    >
      <nav
        className={cx(
          getResponsiveStyle("min-width", theme.sidebarWidth),
          sidebar
        )}
      >
        {children}
      </nav>
    </div>
  );
};

const Sidebar = ({
  children,
  isOpen,
  onClose,
  onOpen,
  bgColor,
  activeColor,
  hoverColor
}: SidebarProps) => {
  // Used to only call `onOpen`/`onClose` when the `isOpen` prop changes.
  // Source: https://dev.to/savagepixie/how-to-mimic-componentdidupdate-with-react-hooks-3j8c
  const didMountRef = React.useRef(false);
  React.useEffect(() => {
    if (didMountRef.current) {
      if (isOpen && onOpen) {
        onOpen();
      } else if (!isOpen && onClose) {
        onClose();
      }
    } else {
      didMountRef.current = true;
    }
  }, [isOpen]);

  const adjustedTheme = ancestorTheme => {
    return {
      sidebarBackgroundColor: bgColor || getCSSVarValue(themeBgDisabled),
      // TODO update these with design tokens
      itemActiveBackgroundColor: activeColor || "#D0D4D7",
      itemHoverBackgroundColor: hoverColor || "#DDDFE2",
      sidebarWidth: defaultSidebarWidths,
      ...ancestorTheme
    };
  };

  return (
    <ThemeProvider theme={adjustedTheme}>
      <StyledSidebar isOpen={isOpen}>{children}</StyledSidebar>
    </ThemeProvider>
  );
};

export default Sidebar;
