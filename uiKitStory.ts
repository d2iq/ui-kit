import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { checkA11y } from "@storybook/addon-a11y";

export default function uiKitStory(name: string, module: any, readme: any) {
  return storiesOf(name, module)
    .addDecorator(withReadme([readme]))
    .addDecorator(checkA11y);
}
