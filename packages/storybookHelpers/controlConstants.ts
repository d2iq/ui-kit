import { Direction } from "../dropdownable/components/Dropdownable";
import { SystemIcons } from "../icons/dist/system-icons-enum";

export const cssDisplayPropertyValues = [
  "inline",
  "block",
  "contents",
  "flex",
  "grid",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "list-item",
  "run-in",
  "table",
  "table-caption",
  "table-column-group",
  "table-header-group",
  "table-footer-group",
  "table-row-group",
  "table-cell",
  "table-column",
  "table-row",
  "none",
  "initial",
  "inherit"
];

export const textAlignValues = [
  "center",
  "end",
  "inherit",
  "initial",
  "justify",
  "left",
  "right",
  "start",
  "unset"
];

export const vertAlignValues = ["top", "center", "bottom"];

export const spacingSizeValues = [
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "none"
];

export const sideValues = [
  "all",
  "top",
  "right",
  "bottom",
  "left",
  "horiz",
  "vert"
];

export const directionsValues = [
  Direction.BottomLeft,
  Direction.BottomRight,
  Direction.BottomCenter,
  Direction.TopLeft,
  Direction.TopRight,
  Direction.TopCenter
];

export const directionsValuesLabels = {
  "Direction.BottomLeft": Direction.BottomLeft,
  "Direction.BottomRight": Direction.BottomRight,
  "Direction.BottomCenter": Direction.BottomCenter,
  "Direction.TopLeft": Direction.TopLeft,
  "Direction.TopRight": Direction.TopRight,
  "Direction.TopCenter": Direction.TopCenter
};

export const toasterAppearance = ["default", "success", "warning", "danger"];
