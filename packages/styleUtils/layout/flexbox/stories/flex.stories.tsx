import * as React from "react";
import { Story, Meta } from "@storybook/react";
import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";
import styled from "@emotion/styled";
import { themeBrandPrimary } from "../../../../design-tokens/build/js/designTokens";

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
      options: ["flex-start", "flex-end", "center", "stretch"],
      defaultValue: "flex-start"
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
      ],
      defaultValue: "flex-start"
    },
    direction: {
      options: ["column", "row", "column-reverse", "row-reverse"],
      defaultValue: "row"
    },
    wrap: {
      options: ["wrap", "nowrap", "wrap-reverse"],
      defaultValue: "nowrap"
    },
    gutterSize: {
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "xxl"],
      defaultValue: "none"
    },
    className: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
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

export const Default = Template.bind({});

export const ResponsiveAlign = Template.bind({});
ResponsiveAlign.args = {
  align: {
    default: "flex-start",
    medium: "center"
  }
};

export const ResponsiveDirections = Template.bind({});
ResponsiveDirections.args = {
  direction: {
    default: "column",
    medium: "row"
  }
};

export const ResponsiveGutterSize = Template.bind({});
ResponsiveGutterSize.args = {
  gutterSize: {
    default: "s",
    medium: "m",
    large: "l",
    jumbo: "xl"
  }
};

export const ResponsiveDirectionsAndGutterSize = Template.bind({});
ResponsiveDirectionsAndGutterSize.args = {
  direction: {
    default: "column",
    medium: "row",
    large: "row"
  }
};

export const ResponsiveJustify = Template.bind({});
ResponsiveJustify.args = {
  justify: {
    default: "flex-start",
    medium: "center"
  }
};
