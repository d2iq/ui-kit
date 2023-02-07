import { addons } from "@storybook/addons";
import Theme from "./theme";
import favicon from "./docs/assets/favicon.ico";

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);

addons.setConfig({
  showPanel: true,
  theme: Theme
});
