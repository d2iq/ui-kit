import * as React from "react";
import { TabTitle, Tabs, TabItem } from "../index";
import { TabsProps } from "../components/Tabs";
import { Story, Meta } from "@storybook/react";

const TabsStory = ({ direction }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      direction={direction}
    >
      <TabItem>
        <TabTitle>Tab 1</TabTitle>
        Tab content.
      </TabItem>
      <TabItem>
        <TabTitle>Tab 2</TabTitle>
        Tab content.
      </TabItem>
    </Tabs>
  );
};

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  subcomponents: { Tabs, TabTitle, TabItem },
  argTypes: {
    direction: {
      options: ["horiz", "vert"],
      control: { type: "radio" }
    },
    onSelect: {
      table: {
        disable: true
      }
    },
    selectedIndex: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<TabsProps> = args => <TabsStory {...args} />;

export const Default = Template.bind({});
Default.args = { direction: "horiz" };

export const Responsive = args => (
  <>
    <p>Resize the viewport width to see the tab direction change 👇</p>
    <TabsStory direction={{ medium: "vert" }} {...args} />
  </>
);
Responsive.args = {
  direction: { medium: "vert" }
};
