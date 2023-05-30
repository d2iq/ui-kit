import * as React from "react";
import { ClickToCopyButton } from "../";
import { StoryFn, Meta } from "@storybook/react";
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

const Template: StoryFn = args => (
  <ClickToCopyButton textToCopy={textToCopy} onCopy={onCopyFn} {...args} />
);

export const Default = {
  render: Template,
  args: { iconSize: "xs" }
};

export const ShowCustomTooltipContentOnCopy = {
  render: Template,

  args: {
    tooltipContent: `"${textToCopy}" copied`
  }
};

export const WithCustomChildren = {
  render: Template,
  args: {
    children: <div>{`Click here to copy the text: "${textToCopy}"`}</div>
  }
};
