import * as React from "react";
import SpacingBox, { SpacingBoxProps } from "../components/SpacingBox";
import { StoryFn, Meta } from "@storybook/react";
import styled from "@emotion/styled";
import { themeBrandPrimary } from "../../../design-tokens/build/js/designTokens";
import {
  cssDisplayPropertyValues,
  sideValues,
  spacingSizeValues
} from "../../../storybookHelpers/controlConstants";

const StoryWrapper = styled.div`
  border: 2px solid ${themeBrandPrimary};
`;

export default {
  title: "Style Utilities/SpacingBox",
  component: SpacingBox,
  argTypes: {
    spacingSize: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
    },
    side: {
      options: sideValues,
      control: {
        type: "select"
      }
    },
    display: {
      options: cssDisplayPropertyValues,
      control: {
        type: "select"
      }
    },
    tag: {
      options: ["ol", "ul"],
      control: { type: "inline-radio" }
    },
    bgColor: {
      control: { type: "color" }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn<SpacingBoxProps> = args => (
  <StoryWrapper>
    <SpacingBox {...args}>Spacing Box Content</SpacingBox>
  </StoryWrapper>
);

export const Default = {
  render: Template
};

const ResponsiveTemplate: StoryFn<SpacingBoxProps> = args => (
  <>
    <p>Resize your viewport width to see the spacing change</p>
    <StoryWrapper>
      <SpacingBox {...args}>Spacing Box Content</SpacingBox>
    </StoryWrapper>
  </>
);

export const ResponsiveSpacingSize = {
  render: ResponsiveTemplate,

  args: {
    spacingSize: {
      default: "none",
      small: "m",
      medium: "l",
      jumbo: "xl"
    }
  }
};

export const ResponsiveSpacingSizePerSide = {
  render: ResponsiveTemplate,

  args: {
    spacingSizePerSide: {
      vert: {
        default: "none",
        medium: "l"
      },
      horiz: {
        default: "none",
        medium: "xl"
      }
    }
  },

  parameters: {
    controls: { exclude: ["side", "spacingSize"] }
  }
};
