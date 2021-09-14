import * as React from "react";
import styled from "@emotion/styled";
import { withKnobs, number } from "@storybook/addon-knobs";
import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";

const SampleContainer = styled("div")`
  background-color: #f5f5f5;

  > * {
    height: 80px;
  }
`;
const DemoChild = styled("div")`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 4px;
  text-align: center;
`;

export default {
  title: "Layout/FlexItem",
  decorators: [withKnobs],
  component: FlexItem
};

export const Default = () => (
  <SampleContainer>
    <Flex>
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
  </SampleContainer>
);

export const FlexShrink = () => (
  <SampleContainer>
    <Flex>
      <FlexItem flex="shrink">
        <DemoChild>shrink</DemoChild>
      </FlexItem>
      <FlexItem>
        <div style={{ width: "100%" }}>
          <DemoChild>grow</DemoChild>
        </div>
      </FlexItem>
    </Flex>
  </SampleContainer>
);

export const ResponsiveFlexValue = () => (
  <div>
    <p>
      The first flex item is `flex="shrink"` on narrower viewports and
      `flex="grow"` on wider viewports
    </p>
    <SampleContainer>
      <Flex>
        <FlexItem flex={{ default: "shrink", medium: "grow" }}>
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
);
export const GrowFactor = () => (
  <SampleContainer>
    <Flex>
      <FlexItem growFactor={2}>
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
);

export const ResponsiveGrowFactor = () => (
  <div>
    <p>
      The first flex item has a grow factor of 1 on narrower viewports, and a
      grow factor of 3 on wider viewports
    </p>
    <SampleContainer>
      <Flex>
        <FlexItem growFactor={{ default: 1, medium: 3 }}>
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
);

export const Order = () => {
  const order = number("order", 0);
  return (
    <SampleContainer>
      <Flex>
        <FlexItem order={order}>
          <DemoChild>Use the Knobs panel to change my order</DemoChild>
        </FlexItem>
        <FlexItem order={1}>
          <DemoChild>2</DemoChild>
        </FlexItem>
        <FlexItem order={2}>
          <DemoChild>3</DemoChild>
        </FlexItem>
      </Flex>
    </SampleContainer>
  );
};

export const ResponsiveOrder = () => {
  return (
    <div>
      <p>
        The first flex-item has an order of 0 on narrower viewports, and an
        order of 3 on wider viewports
      </p>
      <SampleContainer>
        <Flex>
          <FlexItem order={{ default: 0, medium: 3 }}>
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
};
