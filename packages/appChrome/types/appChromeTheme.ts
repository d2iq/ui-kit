import { Theme } from "../../themes/types/appTheme";
import { BreakpointConfig } from "../../shared/styles/breakpoints";

type BgColor = React.CSSProperties["backgroundColor"];
type PaddingHoriz =
  | React.CSSProperties["paddingLeft"]
  | React.CSSProperties["paddingRight"];
type PaddingVert =
  | React.CSSProperties["paddingBottom"]
  | React.CSSProperties["paddingTop"];
type ElWidth = React.CSSProperties["width"];

export interface AppChromeTheme extends Theme {
  headerBackgroundColor?: BgColor;
  headerPaddingHor?: PaddingHoriz;
  headerPaddingVert?: PaddingVert;
  iconWidth?: ElWidth;
  itemActiveBackgroundColor?: BgColor;
  itemHoverBackgroundColor?: BgColor;
  sidebarBackgroundColor?: BgColor;
  sidebarHeaderPaddingHor?: PaddingHoriz;
  sidebarHeaderPaddingVert?: PaddingVert;
  sidebarWidth?: BreakpointConfig<ElWidth>;
  sidebarItemPaddingHor?: PaddingHoriz;
  sidebarItemPaddingVert?: PaddingVert;
}
