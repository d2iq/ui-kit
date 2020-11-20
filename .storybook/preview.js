import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
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
