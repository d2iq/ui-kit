import * as React from "react";
import { CodeSnippet } from "../index";
import { Story, Meta } from "@storybook/react";
import { CodeSnippetProps } from "../components/CodeSnippet";

const snippet = `cd ui-kit && npm start`;

export default {
  title: "Typography/Containers/CodeSnippet",
  component: CodeSnippet,
  argTypes: {
    children: { defaultValue: snippet }
  }
} as Meta;

const Template: Story<CodeSnippetProps> = args => (
  <CodeSnippet {...args}>{args.children}</CodeSnippet>
);

export const Default = Template.bind({});

export const TextToCopy = Template.bind({});
TextToCopy.args = {
  textToCopy: snippet
};

export const TextToCopyWithOnCopyCallback = Template.bind({});
TextToCopyWithOnCopyCallback.args = {
  textToCopy: snippet,
  onCopy: () => alert("oncopy")
};

export const TextToCopyAndCustomTooltipContentOnCopy = Template.bind({});
TextToCopyAndCustomTooltipContentOnCopy.args = {
  textToCopy: snippet,
  copyTooltipContent: `"${snippet}" copied`
};
