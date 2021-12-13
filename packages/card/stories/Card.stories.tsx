import * as React from "react";
import { ButtonCard, Card, LinkCard } from "../index";
import { Story, Meta } from "@storybook/react";
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";

export default {
  title: "Layout/Card",
  component: Card,
  subcomponents: { ButtonCard, LinkCard },
  argTypes: {
    paddingSize: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
    },
    aspectRatio: {
      options: ["none", "2:1"],
      mapping: { "2:1": [2, 1] }
    }
  }
} as Meta;

const Template: Story = args => <Card {...args}>Card Content</Card>;

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

export const AspectRatio = args => (
  <div style={{ maxWidth: "400px" }}>
    <Card {...args} aspectRatio={[2, 1]}>
      I stay at a 2:1 aspect ratio
    </Card>
  </div>
);

export const DefaultLinkCard = args => (
  <LinkCard {...args} url="http://google.com" linkDescription="Google">
    Default Link Card
  </LinkCard>
);

export const DefaultButtonCard = args => (
  <ButtonCard {...args}>Default Button Card</ButtonCard>
);
