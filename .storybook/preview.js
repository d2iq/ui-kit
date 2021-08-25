import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { addParameters } from "@storybook/react";
import { iconDecorator } from "../decorators/iconDecorator";
require("../packages/shared/styles/global").injectStorybookResetCss();

addDecorator(iconDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
