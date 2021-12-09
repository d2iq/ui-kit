import * as React from "react";
import { CodeSnippet } from "../index";
import { Story, Meta } from "@storybook/react";
import { CodeSnippetProps } from "../components/CodeSnippet";

const snippet = `cd ui-kit && npm start`;

export default {
  title: "Typography/Containers/CodeSnippet",
  component: CodeSnippet,
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    children: snippet
  }
} as Meta;

const Template: Story<CodeSnippetProps> = args => (
  <CodeSnippet {...args}>{args.children}</CodeSnippet>
);

export const Default = Template.bind({});
Default.parameters = {
  controls: { exclude: ["textToCopy", "onCopy", "copyTooltipContent"] }
};

export const TextToCopy = Template.bind({});
TextToCopy.args = {
  textToCopy: snippet
};
TextToCopy.parameters = {
  controls: { exclude: ["copyTooltipContent", "onCopy"] }
};

export const TextToCopyWithOnCopyCallback = Template.bind({});
TextToCopyWithOnCopyCallback.args = {
  textToCopy: snippet,
  onCopy: () => alert("oncopy")
};
TextToCopyWithOnCopyCallback.parameters = {
  controls: { exclude: ["copyTooltipContent"] }
};

export const TextToCopyAndCustomTooltipContentOnCopy = Template.bind({});
TextToCopyAndCustomTooltipContentOnCopy.args = {
  textToCopy: snippet,
  copyTooltipContent: `"${snippet}" copied`
};
