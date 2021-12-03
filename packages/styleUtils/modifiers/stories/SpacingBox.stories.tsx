import * as React from "react";
import SpacingBox, { SpacingBoxProps } from "../components/SpacingBox";
import { Story, Meta } from "@storybook/react";
import styled from "@emotion/styled";
import { themeBrandPrimary } from "../../../design-tokens/build/js/designTokens";

const StoryWrapper = styled.div`
  border: 2px solid ${themeBrandPrimary};
`;

export default {
  title: "Style Utilities/SpacingBox",
  component: SpacingBox,
  argTypes: {
    spacingSize: {
      options: ["xxs", "xs", "s", "m", "l", "xl", "xxl", "none"],
      control: {
        type: "select"
      }
    },
    side: {
      options: ["all", "top", "right", "bottom", "left", "horiz", "vert"],
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

const Template: Story<SpacingBoxProps> = args => (
  <StoryWrapper>
    <SpacingBox {...args}>Spacing Box Content</SpacingBox>
  </StoryWrapper>
);

export const Default = Template.bind({});

export const ResponsiveSpacingSize = Template.bind({});
ResponsiveSpacingSize.args = {
  spacingSize: {
    default: "none",
    small: "m",
    medium: "l",
    jumbo: "xl"
  }
};

export const ResponsiveSpacingSizePerSide = Template.bind({});
ResponsiveSpacingSizePerSide.args = {
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
};
