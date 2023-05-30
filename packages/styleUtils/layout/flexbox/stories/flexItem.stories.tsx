import * as React from "react";
import styled from "@emotion/styled";
import { StoryFn, Meta } from "@storybook/react";
import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";
import { themeBrandPrimary } from "../../../../design-tokens/build/js/designTokens";

const SampleContainer = styled.div`
  background-color: #f5f5f5;

  > * {
    height: 80px;
  }
`;

const DemoChild = styled.div`
  background-color: white;
  border: 2px solid ${themeBrandPrimary};
  height: 100%;
  padding: 4px;
  text-align: center;
`;

export default {
  title: "Layout/FlexItem",
  component: FlexItem,
  argTypes: {
    flex: {
      options: ["shrink", "grow"]
    },
    growFactor: {
      options: [1, 2]
    },
    order: {
      options: [1, 2, 3, 4]
    },
    className: {
      control: { disable: true }
    }
  }
} as Meta;

const flexChildren = [1, 2, 3, 4];

const Template: StoryFn = args => (
  <Flex>
    <FlexItem {...args}>
      {flexChildren.map((flexChild, i) => (
        <DemoChild key={i}>{flexChild}</DemoChild>
      ))}
    </FlexItem>
  </Flex>
);

export const Default = {
  render: Template
};

export const FlexShrink = {
  render: args => (
    <SampleContainer>
      <Flex>
        <FlexItem flex="shrink" {...args}>
          <DemoChild>shrink</DemoChild>
        </FlexItem>
        <FlexItem>
          <div style={{ width: "100%" }}>
            <DemoChild>grow</DemoChild>
          </div>
        </FlexItem>
      </Flex>
    </SampleContainer>
  )
};

export const ResponsiveFlexValue = {
  render: args => (
    <div>
      <p>
        The first flex item is `flex="shrink"` on narrower viewports and
        `flex="grow"` on wider viewports
      </p>
      <SampleContainer>
        <Flex>
          <FlexItem flex={{ default: "shrink", medium: "grow" }} {...args}>
            <div style={{ width: "100%" }}>
              <DemoChild>dyanmic</DemoChild>
            </div>
          </FlexItem>
          <FlexItem>
            <div style={{ width: "100%" }}>
              <DemoChild>grow</DemoChild>
            </div>
          </FlexItem>
        </Flex>
      </SampleContainer>
    </div>
  )
};

export const ResponsiveGrowFactor = {
  render: args => (
    <div>
      <p>
        The first flex item has a grow factor of 1 on narrower viewports, and a
        grow factor of 3 on wider viewports
      </p>
      <SampleContainer>
        <Flex>
          <FlexItem growFactor={{ default: 1, medium: 3 }} {...args}>
            <DemoChild>growFactor 2</DemoChild>
          </FlexItem>
          <FlexItem growFactor={1}>
            <DemoChild>growFactor 1</DemoChild>
          </FlexItem>
          <FlexItem growFactor={1}>
            <DemoChild>growFactor 1</DemoChild>
          </FlexItem>
        </Flex>
      </SampleContainer>
    </div>
  )
};

export const Order = {
  render: args => {
    return (
      <SampleContainer>
        <Flex>
          <FlexItem order={0} {...args}>
            <DemoChild>Use the Control panel to change my order.</DemoChild>
          </FlexItem>
          <FlexItem order={1}>
            <DemoChild>2</DemoChild>
          </FlexItem>
          <FlexItem order={2}>
            <DemoChild>3</DemoChild>
          </FlexItem>
          <FlexItem order={3}>
            <DemoChild>4</DemoChild>
          </FlexItem>
        </Flex>
      </SampleContainer>
    );
  }
};

export const ResponsiveOrder = {
  render: args => {
    return (
      <div>
        <p>
          The first flex-item has an order of 0 on narrower viewports, and an
          order of 3 on wider viewports
        </p>
        <SampleContainer>
          <Flex>
            <FlexItem order={{ default: 0, medium: 3 }} {...args}>
              <DemoChild>0 or 3</DemoChild>
            </FlexItem>
            <FlexItem order={1}>
              <DemoChild>2</DemoChild>
            </FlexItem>
            <FlexItem order={2}>
              <DemoChild>3</DemoChild>
            </FlexItem>
          </Flex>
        </SampleContainer>
      </div>
    );
  }
};
