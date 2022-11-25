import * as React from "react";
import { TabTitle, Tabs, TabItem } from "../index";
import { TabsProps } from "../components/Tabs";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  subcomponents: { Tabs, TabTitle, TabItem },
  decorators: [Story => <div style={{ maxWidth: "400px" }}>{Story()}</div>],
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

const Template: Story<TabsProps> = ({ direction, ...args }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      direction={direction}
      {...args}
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

export const Default = Template.bind({});
Default.args = { direction: "horiz" };

export const Responsive = Template.bind({});
Responsive.args = {
  direction: { medium: "vert" }
};
