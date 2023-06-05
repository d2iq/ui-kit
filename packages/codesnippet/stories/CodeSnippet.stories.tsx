import * as React from "react";
import { CodeSnippet } from "../index";
import { StoryFn, Meta } from "@storybook/react";
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

const Template: StoryFn<CodeSnippetProps> = args => (
  <CodeSnippet {...args}>{args.children}</CodeSnippet>
);

export const Default = {
  render: Template,

  parameters: {
    controls: { exclude: ["textToCopy", "onCopy", "copyTooltipContent"] }
  }
};

export const TextToCopy = {
  render: Template,

  args: {
    textToCopy: snippet
  },

  parameters: {
    controls: { exclude: ["copyTooltipContent", "onCopy"] }
  }
};

export const TextToCopyWithOnCopyCallback = {
  render: Template,

  args: {
    textToCopy: snippet,
    onCopy: () => alert("oncopy")
  },

  parameters: {
    controls: { exclude: ["copyTooltipContent"] }
  }
};

export const TextToCopyAndCustomTooltipContentOnCopy = {
  render: Template,

  args: {
    textToCopy: snippet,
    copyTooltipContent: `"${snippet}" copied`
  }
};
