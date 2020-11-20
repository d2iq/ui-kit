import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";

export default function uiKitStory(name: string, module: any, readme: any) {
  return storiesOf(name, module).addDecorator(checkA11y);
}
