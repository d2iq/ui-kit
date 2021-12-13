import * as React from "react";
import { ClickToCopyButton } from "../";
import { Story, Meta } from "@storybook/react";
import { textColorPrimary } from "../../design-tokens/build/js/designTokens";
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";

export default {
  title: "Actions/ClickToCopyButton",
  component: ClickToCopyButton,
  argTypes: {
    color: {
      control: { type: "color" }
    },
    iconSize: {
      options: spacingSizeValues
    }
  },
  args: {
    color: textColorPrimary
  }
} as Meta;

const onCopyFn = () => {
  alert("oncopy");
};

const textToCopy = "Copy This!";

const Template: Story = args => (
  <ClickToCopyButton textToCopy={textToCopy} onCopy={onCopyFn} {...args} />
);

export const Default = Template.bind({});
Default.args = { color: "red", iconSize: "xs" };

export const ShowCustomTooltipContentOnCopy = Default.bind({});
ShowCustomTooltipContentOnCopy.args = {
  tooltipContent: `"${textToCopy}" copied`
};

export const WithCustomChildren = args => (
  <ClickToCopyButton textToCopy={textToCopy} {...args}>
    <div>{`Click here to copy the text: "${textToCopy}"`}</div>
  </ClickToCopyButton>
);
