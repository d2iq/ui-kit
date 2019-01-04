const req = require.context("./../packages", true, /.stories.tsx$/);

import { configure, setAddon, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { setOptions } from "@storybook/addon-options";
import infoAddon, { setDefaults } from "@storybook/addon-info";
require("../packages/shared/styles/global").injectStorybookResetCss();

addDecorator(withKnobs);
addDecorator(checkA11y);
setAddon(infoAddon);

setOptions({
  name: "Mesosphere UI Kit",
  url: "#",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

setDefaults({
  header: true,
  inline: true
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
