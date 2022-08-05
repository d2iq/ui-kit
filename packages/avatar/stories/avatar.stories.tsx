import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Avatar } from "../index";
import {
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl
} from "../../design-tokens/build/js/designTokens";
import { serviceImg } from "./helpers/serviceImg";
import { AvatarProps } from "../components/Avatar";

export default {
  title: "Graphic Elements/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["xs", "s", "m", "l", "xl"],
      control: {
        type: "select"
      }
    }
  }
} as Meta;

const Template: Story<AvatarProps> = args => (
  <Avatar src={serviceImg} label="Kubernetes" {...args} />
);

export const Default = Template.bind({});
