import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { themeBgSecondary } from "../../../../design-tokens/build/js/designTokens";
import { SpacingBox } from "../../../modifiers";
import Flex from "../components/Flex";
import FlexItem from "../components/FlexItem";
import styled from "@emotion/styled";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import { css } from "@emotion/css";
import { DangerButton, SecondaryButton } from "../../../../button";

const DemoChild = styled("div")`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 100%;
  padding: 4px;
  text-align: center;
`;

export default {
  title: "Layout/Flex",
  decorators: [withKnobs],
  component: Flex
};

export const Default = () => (
  <SpacingBox spacingSize="m" bgColor={themeBgSecondary}>
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
  </SpacingBox>
);

export const Align = () => {
  const alignments = {
    flexStart: "flex-start",
    flexEnd: "flex-end",
    center: "center",
    stretch: "stretch"
  };
  const align = select("align", alignments, "flex-start");

  return (
    <div>
      <p>Use the Knobs panel to change the alignment of the flex items</p>
      <SpacingBox
        spacingSize="m"
        bgColor={themeBgSecondary}
        className={css`
          > * {
            min-height: 100px;
          }
        `}
      >
        <Flex align={align}>
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
      </SpacingBox>
    </div>
  );
};

export const ResponsiveAlign = () => (
  <div>
    <p>Change the width of your viewport to see the alignment change</p>
    <SpacingBox
      spacingSize="m"
      bgColor={themeBgSecondary}
      className={css`
        > * {
          min-height: 100px;
        }
      `}
    >
      <Flex
        align={{
          default: "flex-start",
          medium: "center"
        }}
      >
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
    </SpacingBox>
  </div>
);

export const Directions = () => {
  const directions = {
    column: "column",
    row: "row",
    columnReverse: "column-reverse",
    rowReverse: "row-reverse"
  };
  const direction = select("directions", directions, "column");

  return (
    <div>
      <p>
        Use the Knobs panel to change the direction the flex items get layed out
      </p>
      <SpacingBox spacingSize="m" bgColor={themeBgSecondary}>
        <Flex direction={direction as React.CSSProperties["flexDirection"]}>
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
      </SpacingBox>
    </div>
  );
};

export const ResponsiveDirections = () => (
  <div>
    <p>Reduce the width of your viewport to see the boxes lay out as columns</p>
    <Flex
      direction={{
        default: "column",
        medium: "row"
      }}
    >
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
      {null}
    </Flex>
  </div>
);

export const GutterSize = () => {
  const gutterSizes = {
    xxs: "xxs",
    xs: "xs",
    s: "s",
    m: "m",
    l: "l",
    xl: "xl",
    xxl: "xxl",
    none: "none"
  };
  const gutterSize = select("gutterSizes", gutterSizes, "m");

  return (
    <div>
      <p>Use the Knobs panel to change the size of the gutters</p>
      <Flex gutterSize={gutterSize as SpaceSize}>
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
    </div>
  );
};

export const ResponsiveGutterSize = () => {
  return (
    <div>
      <p>Change the width of your viewport to see the gutter size change</p>
      <Flex
        gutterSize={{
          default: "s",
          medium: "m",
          large: "l",
          jumbo: "xl"
        }}
      >
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
    </div>
  );
};

export const ResponsiveDirectionsAndGutterSize = () => (
  <div>
    <p>
      Reduce the width of your viewport to see the boxes lay out as a column and
      see the gutter size change
    </p>
    <Flex
      direction={{
        default: "column",
        medium: "row",
        large: "row"
      }}
      gutterSize={{ default: "xs", medium: "l", large: "xxl" }}
    >
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
      {null}
    </Flex>
  </div>
);

export const Justify = () => {
  const justifications = {
    flexStart: "flex-start",
    flexEnd: "flex-end",
    center: "center",
    spaceBetween: "space-between",
    spaceAround: "space-around",
    spaceEvenly: "space-evenly",
    stretch: "stretch"
  };
  const justify = select("justify", justifications, "m");

  return (
    <div>
      <p>
        Use the Knobs panel to change the justification alignment of the flex
        items
      </p>
      <SpacingBox spacingSize="m" bgColor={themeBgSecondary}>
        <Flex justify={justify as React.CSSProperties["justifyContent"]}>
          <FlexItem flex="shrink">
            <DemoChild>1</DemoChild>
          </FlexItem>
          <FlexItem flex="shrink">
            <DemoChild>2</DemoChild>
          </FlexItem>
          <FlexItem flex="shrink">
            <DemoChild>3</DemoChild>
          </FlexItem>
          <FlexItem flex="shrink">
            <DemoChild>4</DemoChild>
          </FlexItem>
        </Flex>
      </SpacingBox>
    </div>
  );
};

export const ResponsiveJustify = () => (
  <div>
    <p>
      Change the width of your viewport to see the justification alignment
      change
    </p>
    <SpacingBox spacingSize="m" bgColor={themeBgSecondary}>
      <Flex
        justify={{
          default: "flex-start",
          medium: "center"
        }}
      >
        <FlexItem flex="shrink">
          <DemoChild>1</DemoChild>
        </FlexItem>
        <FlexItem flex="shrink">
          <DemoChild>2</DemoChild>
        </FlexItem>
        <FlexItem flex="shrink">
          <DemoChild>3</DemoChild>
        </FlexItem>
        <FlexItem flex="shrink">
          <DemoChild>4</DemoChild>
        </FlexItem>
      </Flex>
    </SpacingBox>
  </div>
);

export const Wrap = () => {
  const wrapVals = {
    wrap: "wrap",
    wrapReverse: "wrap-reverse",
    noWrap: "nowrap"
  };
  const wrap = select("wrap", wrapVals, "wrap");

  return (
    <div>
      <p>Use the Knobs panel to change the style of wrapping</p>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <SpacingBox spacingSize="m" bgColor={themeBgSecondary}>
          <Flex wrap={wrap as React.CSSProperties["flexWrap"]} gutterSize="m">
            <FlexItem flex="shrink">
              <DemoChild>Flex child 1</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 2</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 3</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 4</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 5</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 6</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 7</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 8</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 9</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 10</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 11</DemoChild>
            </FlexItem>
            <FlexItem flex="shrink">
              <DemoChild>Flex child 12</DemoChild>
            </FlexItem>
          </Flex>
        </SpacingBox>
      </div>
    </div>
  );
};

export const WithButtons = () => {
  return (
    <SpacingBox spacingSize="m">
      <Flex gutterSize="s" align="center">
        <DangerButton>Delete License</DangerButton>
        <SecondaryButton>Go to Support Portal</SecondaryButton>
      </Flex>
    </SpacingBox>
  );
};
