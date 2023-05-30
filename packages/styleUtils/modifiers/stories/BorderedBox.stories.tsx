import * as React from "react";
import BorderedBox, { BorderedBoxProps } from "../components/BorderedBox";
import { StoryFn, Meta } from "@storybook/react";
import {
  cssDisplayPropertyValues,
  sideValues,
  textAlignValues
} from "../../../storybookHelpers/controlConstants";
import { css } from "@emotion/css";

export default {
  title: "Style Utilities/BorderedBox",
  component: BorderedBox,
  argTypes: {
    side: {
      options: sideValues,
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["normal", "heavy"]
    },
    radius: {
      options: ["none", "small", "default"],
      control: {
        type: "select"
      }
    },
    bgColor: {
      control: { type: "color" }
    },
    display: {
      options: cssDisplayPropertyValues,
      control: {
        type: "select"
      }
    },
    textAlign: {
      options: textAlignValues,
      control: { type: "select" }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  },
  args: {
    side: "all",
    variant: "normal"
  }
} as Meta;

const Template: StoryFn<BorderedBoxProps> = args => {
  const setHeight = css`
    height: 200px;
  `;
  return (
    <BorderedBox side="all" {...args} className={setHeight}>
      <p>BorderedBox Content</p>
      <p>BorderedBox Content</p>
      <p>BorderedBox Content</p>
    </BorderedBox>
  );
};

export const Default = {
  render: Template
};
