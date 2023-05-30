import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";
import styled from "@emotion/styled";
import { themeBrandPrimary } from "../../../../design-tokens/build/js/designTokens";
import { spacingSizeValues } from "../../../../storybookHelpers/controlConstants";

const DemoChild = styled.div`
  border: 2px solid ${themeBrandPrimary};
  box-sizing: border-box;
  height: 100%;
  padding: 4px;
  text-align: center;
`;

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    align: {
      options: ["flex-start", "flex-end", "center", "stretch"]
    },
    justify: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch"
      ]
    },
    direction: {
      options: ["column", "row", "column-reverse", "row-reverse"]
    },
    wrap: {
      options: ["wrap", "nowrap", "wrap-reverse"]
    },
    gutterSize: {
      options: spacingSizeValues
    },
    className: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn = args => (
  <Flex {...args}>
    <FlexItem>
      <DemoChild>1</DemoChild>
    </FlexItem>
    <FlexItem>
      <DemoChild>2</DemoChild>
    </FlexItem>
    <FlexItem>
      <DemoChild>3</DemoChild>
    </FlexItem>
    <FlexItem>
      <DemoChild>4</DemoChild>
    </FlexItem>
  </Flex>
);

export const Default = {
  render: Template
};

export const ResponsiveAlign = {
  render: Template,

  args: {
    align: {
      default: "flex-start",
      medium: "center"
    }
  }
};

export const ResponsiveDirections = {
  render: Template,

  args: {
    direction: {
      default: "column",
      medium: "row"
    }
  }
};

export const ResponsiveGutterSize = {
  render: Template,

  args: {
    gutterSize: {
      default: "s",
      medium: "m",
      large: "l",
      jumbo: "xl"
    }
  }
};

export const ResponsiveDirectionsAndGutterSize = {
  render: Template,

  args: {
    direction: {
      default: "column",
      medium: "row",
      large: "row"
    }
  }
};

export const ResponsiveJustify = {
  render: Template,

  args: {
    justify: {
      default: "flex-start",
      medium: "center"
    }
  }
};
