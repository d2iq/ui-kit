import * as React from "react";
import LinkCard from "../components/LinkCard";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Navigation/LinkCard",
  component: LinkCard,
  argTypes: {
    paddingSize: {
      options: ["s", "m", "l", "xl"],
      control: {
        type: "select"
      }
    }
  }
} as Meta;

const Template: StoryFn = args => (
  <LinkCard
    url="http://google.com"
    linkDescription="Google"
    {...args}
    openInNewTab={true}
  >
    default
  </LinkCard>
);

export const Default = {
  render: Template
};

export const ResponsivePaddingSize = {
  render: Template,

  args: {
    paddingSize: {
      default: "s",
      small: "m",
      medium: "l",
      large: "xl",
      jumbo: "xxl"
    }
  }
};

export const AspectRatio = {
  render: Template,

  args: {
    aspectRatio: [2, 1]
  }
};
