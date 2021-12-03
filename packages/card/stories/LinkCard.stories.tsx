import * as React from "react";
import LinkCard from "../components/LinkCard";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Navigation/LinkCard",
  component: LinkCard,
  argTypes: {
    paddingSize: {
      options: ["s", "m", "l", "xl"],
      control: {
        type: "select"
      }
    }
  }
} as Meta;

const Template: Story = args => (
  <LinkCard
    url="http://google.com"
    linkDescription="Google"
    {...args}
    openInNewTab={true}
  >
    default
  </LinkCard>
);

export const Default = Template.bind({});

export const ResponsivePaddingSize = Template.bind({});
ResponsivePaddingSize.args = {
  paddingSize: {
    default: "s",
    small: "m",
    medium: "l",
    large: "xl",
    jumbo: "xxl"
  }
};

export const AspectRatio = Template.bind({});
AspectRatio.args = {
  aspectRatio: [2, 1]
};
