const req = require.context("./../packages", true, /.stories.tsx$/);

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { iconDecorator } from "../decorators/iconDecorator";
require("../packages/shared/styles/global").injectStorybookResetCss();

addDecorator(iconDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(
  withInfo({
    inline: true
  })
);
withOptions({
  name: "Mesosphere UI Kit",
  url: "#",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
