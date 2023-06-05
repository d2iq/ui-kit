import * as React from "react";
import { ButtonCard, Card, LinkCard } from "../index";
import { StoryFn, Meta } from "@storybook/react";
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";

export default {
  title: "Layout/Card",
  component: Card,
  subcomponents: { ButtonCard, LinkCard },
  argTypes: {
    paddingSize: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
    },
    children: {
      control: {
        type: "text"
      }
    },
    aspectRatio: {
      options: ["none", "2:1"],
      mapping: { "2:1": [2, 1] }
    },
    header: { table: { expanded: true } }
  }
} as Meta;

const Template: StoryFn = args => <Card {...args}>{args.children}</Card>;

export const Default = {
  render: Template,

  args: {
    children: "Card Content"
  }
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
    },
    children: "Responsive Card Content"
  }
};

export const AspectRatio = {
  render: Template,

  args: { aspectRatio: "2:1" }
};

export const WithHeaderImage = {
  render: Template,

  args: {
    header: {
      headerImg: "https://via.placeholder.com/1000",
      headerImgAltText: "placeholder image",
      size: "m"
    },
    children: "Card Content"
  }
};
