import * as React from "react";
import { pickReadableTextColor } from "../../../shared/styles/color";
import {
  greyLightLighten5,
  red,
  yellow,
  green,
  blue,
  purple,
  greyLight,
  themeBrandPrimary
} from "../../../design-tokens/build/js/designTokens";
import Box, { BoxProps } from "../components/Box";
import { css } from "@emotion/css";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Style Utilities/Box",
  component: Box,
  argTypes: {
    bgColor: {
      options: [greyLightLighten5, red, yellow, green, blue, purple],
      control: {
        type: "select"
      }
    },
    bgImageUrl: {
      defaultValue: "",
      control: {
        type: "text"
      }
    },
    textAlign: {
      options: ["left", "right", "center"],
      control: {
        type: "radio"
      }
    },
    vertAlignChildren: {
      options: ["top", "center", "bottom"],
      control: {
        type: "radio"
      }
    },
    isVisuallyHidden: {
      options: [true, false],
      control: {
        type: "boolean"
      }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<BoxProps> = args => (
  <Box {...args}>
    <div
      style={{
        border: `2px solid ${themeBrandPrimary}`,
        height: "300px",
        textAlign: "center"
      }}
    >
      Box
    </div>
  </Box>
);

export const Default = Template.bind({});
Default.args = { bgColor: greyLightLighten5 };

export const BackgroundImage = Template.bind({});
BackgroundImage.args = { bgImageUrl: "https://via.placeholder.com/150" };

export const BackgroundImageWithOptions = args => {
  const bgOptions = `{\n\t"position": "top-left",\n\t"repeat": "repeat-x",\n\t"size": "contain"\n}`;

  return (
    <div>
      <p>Options:</p>
      <pre>{bgOptions}</pre>
      <Box
        {...args}
        bgImageUrl="https://via.placeholder.com/150"
        bgImageOptions={{
          size: "contain",
          repeat: "repeat-x",
          position: "top-left"
        }}
      >
        <div style={{ height: "300px" }} />
      </Box>
    </div>
  );
};

export const DisplayInline = args => (
  <>
    <Box display="inline" {...args}>
      Box 1
    </Box>
    <Box display="inline" {...args}>
      Box 2
    </Box>
    <Box display="inline" {...args}>
      Box 3
    </Box>
  </>
);

export const VerticalAlignChildren = args => {
  const setHeight = css`
    > * {
      height: 200px;
    }
  `;

  return (
    <div>
      <p>Use the Control panel to try other alignments.</p>
      <div className={setHeight}>
        <Box bgColor={greyLight} {...args}>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </Box>
      </div>
    </div>
  );
};

export const CustomTag = args => {
  return (
    <Box
      {...args}
      tag="section"
    >{`This is rendered using a <section> tag`}</Box>
  );
};
