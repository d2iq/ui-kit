import { addons } from "@storybook/addons";
import Theme from "./theme";

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  panelPosition: "bottom",
  theme: Theme
});
