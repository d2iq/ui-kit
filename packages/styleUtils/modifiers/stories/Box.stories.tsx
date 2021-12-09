import * as React from "react";
import {
  greyLight,
  themeBrandPrimary
} from "../../../design-tokens/build/js/designTokens";
import Box, { BoxProps } from "../components/Box";
import { css } from "@emotion/css";
import { Story, Meta } from "@storybook/react";
import {
  cssDisplayPropertyValues,
  textAlignValues,
  vertAlignValues
} from "../../../storybookHelpers/controlContants";

export default {
  title: "Style Utilities/Box",
  component: Box,
  argTypes: {
    bgColor: {
      control: { type: "color" }
    },
    bgImageUrl: {
      control: {
        type: "text"
      }
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
    vertAlignChildren: {
      options: vertAlignValues,
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
  },
  args: {
    bgImageUrl: "",
    bgImageOptions: {},
    isVisuallyHidden: false
  }
} as Meta;

const setHeight = css`
  > * {
    height: 200px;
  }
`;

const Template: Story<BoxProps> = args => {
  const setBorder = css`
    border: 2px solid ${themeBrandPrimary};
  `;
  return (
    <div className={css([setHeight, setBorder])}>
      <Box {...args}>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Box>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { bgColor: greyLight, textAlign: "center" };

export const BackgroundImage = Template.bind({});
BackgroundImage.args = { bgImageUrl: "https://via.placeholder.com/150" };

export const BackgroundImageWithOptions: Story<BoxProps> = args => {
  const bgOptions = `{\n\t"position": "top-left",\n\t"repeat": "repeat-x",\n\t"size": "contain"\n}`;

  return (
    <div>
      <p>Options:</p>
      <pre>{bgOptions}</pre>
      <Box {...args}>
        <div style={{ height: "300px" }} />
      </Box>
    </div>
  );
};

BackgroundImageWithOptions.args = {
  bgImageUrl: "https://via.placeholder.com/150",
  bgImageOptions: {
    size: "contain",
    repeat: "repeat-x",
    position: "top-left"
  }
};
BackgroundImageWithOptions.parameters = {
  controls: {
    exclude: ["vertAlignChildren", "textAlign", "bgColor", "display"]
  }
};

export const DisplayInline: Story<BoxProps> = args => (
  <>
    <Box {...args}>Box 1</Box>
    <Box {...args}>Box 2</Box>
    <Box {...args}>Box 3</Box>
  </>
);

DisplayInline.args = { display: "inline" };
DisplayInline.parameters = {
  controls: { exclude: ["vertAlignChildren", "textAlign"] }
};

export const VerticalAlignChildren: Story<BoxProps> = args => (
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

VerticalAlignChildren.parameters = { controls: { exclude: ["display"] } };

export const CustomTag = args => (
  <div className={setHeight}>
    <Box tag="section" {...args}>
      {`This is rendered using a <section> tag`}
    </Box>
  </div>
);
