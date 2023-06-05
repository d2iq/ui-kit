import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ButtonCard from "../components/ButtonCard";

export default {
  title: "Actions/ButtonCard",
  component: ButtonCard,
  argTypes: {
    paddingSize: {
      options: ["s", "m", "l", "xl"]
    }
  },
  aspectRatio: {
    options: ["none", "2:1"],
    mapping: { "2:1": [2, 1] }
  },
  args: {
    paddingSize: "m"
  }
} as Meta;

const Template: StoryFn = args => <ButtonCard {...args}>default</ButtonCard>;

export const Default = {
  render: Template
};

export const Active = {
  render: Template,

  args: {
    isActive: true
  }
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true
  }
};

export const WithOnClick = {
  render: Template,

  args: {
    onClick: action("button clicked")
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
    }
  }
};

export const AspectRatio = {
  render: args => (
    <div style={{ maxWidth: "400px" }}>
      <ButtonCard aspectRatio={[2, 1]} {...args}>
        I stay at a 2:1 aspect ratio
      </ButtonCard>
    </div>
  )
};
