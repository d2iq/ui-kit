import { addons } from "@storybook/addons";
import Theme from "./theme";

const link = document.createElement("link");
document.head.appendChild(link);

addons.setConfig({
  showPanel: true,
  theme: Theme
});
