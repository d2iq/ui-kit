import * as React from "react";
import GridList, { GridListProps } from "../components/GridList";
import styled from "@emotion/styled";
import {
  spaceL,
  themeBrandPrimary
} from "../../../../design-tokens/build/js/designTokens";
import { Story, Meta } from "@storybook/react";

const GridChild = styled.div`
  border: 2px solid ${themeBrandPrimary};
  padding: ${spaceL};
`;

const gridChildren = new Array(12).fill(0).map((_, i) => (
  <li key={i}>
    <GridChild>Child</GridChild>
  </li>
));

export default {
  title: "Layout/GridList",
  component: GridList,
  argTypes: {
    columnCount: {
      control: { type: "number" }
    },
    gutterSize: {
      options: ["none", "xxs", "xs", "s", "m", "l", "xl", "xxl"],
      control: { type: "select" },
      defaultValue: "m"
    },
    centerItems: {
      options: [true, false],
      control: { type: "boolean" },
      defaultValue: false
    },
    tag: {
      options: ["ol", "ul"],
      control: { type: "inline-radio" },
      defaultValue: "ul"
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<GridListProps> = args => (
  <GridList {...args}>{gridChildren}</GridList>
);

export const DynamicExample = Template.bind({});

export const ResponsiveGridSizing = Template.bind({});
ResponsiveGridSizing.args = {
  gutterSize: { small: "m", medium: "l", large: "xl" },
  columnCount: { small: 1, medium: 2, large: 3 }
};
