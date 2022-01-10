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
    children: {
      control: {
        type: "text"
      }
    },
    aspectRatio: {
      options: ["none", "2:1"],
      mapping: { "2:1": [2, 1] }
    },
    header: { table: { expanded: true } }
  }
} as Meta;

const Template: Story = args => <Card {...args}>{args.children}</Card>;

export const Default = Template.bind({});
Default.args = {
  children: "Card Content"
};

export const ResponsivePaddingSize = Default.bind({});
ResponsivePaddingSize.args = {
  paddingSize: {
    default: "s",
    small: "m",
    medium: "l",
    large: "xl",
    jumbo: "xxl"
  },
  children: "Responsive Card Content"
};

export const AspectRatio = args => (
  <div style={{ maxWidth: "400px" }}>
    <Card {...args}>I stay at a 2:1 aspect ratio</Card>
  </div>
);

AspectRatio.args = { aspectRatio: "2:1" };

export const DefaultLinkCard = args => (
  <LinkCard {...args} url="http://google.com" linkDescription="Google">
    Default Link Card
  </LinkCard>
);

export const WithHeaderImage = Template.bind({});
WithHeaderImage.args = {
  header: {
    headerImg: "https://via.placeholder.com/1000",
    headerImgAltText: "placeholder image",
    size: "m"
  },
  children: "Card Content"
};

export const DefaultButtonCard = args => (
  <ButtonCard {...args}>Default Button Card</ButtonCard>
);
