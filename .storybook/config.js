const req = require.context("./../packages", true, /.stories.tsx$/);

import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { create } from '@storybook/theming/create';
import { addReadme } from 'storybook-readme';
import { iconDecorator } from "../decorators/iconDecorator";
require("../packages/shared/styles/global").injectStorybookResetCss();

addDecorator(iconDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(addReadme);
addDecorator(
  withInfo({
    inline: true,
    source: false
  })
);
addParameters({
  options: {
    isFullscreen: false,
    showPanel: true,
    panelPosition: "bottom",
    theme: create({
      brandTitle: "Mesosphere UI Kit",
      brandUrl: "#",
    }),
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
