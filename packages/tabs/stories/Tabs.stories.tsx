import * as React from "react";
import { TabTitle, Tabs, TabItem } from "../index";
import { TabDirection } from "../components/Tabs";

class Example extends React.Component<
  { direction?: TabDirection },
  Partial<{ selectedIndex: number }>
> {
  state = { selectedIndex: 0 };
  handleSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };
  render() {
    const { selectedIndex } = this.state;
    return (
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={this.handleSelect}
        direction={this.props.direction}
      >
        <TabItem>
          <TabTitle>Tab 1 Name</TabTitle>
          <div>First tab Content</div>
        </TabItem>
        <TabItem>
          <TabTitle>Tab 2 Name</TabTitle>
          Second Tab Content
        </TabItem>
      </Tabs>
    );
  }
}

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  subcomponents: { Tabs, TabTitle, TabItem }
};

export const Default = () => <Example />;

export const Vertical = () => <Example direction="vert" />;

export const Responsive = () => (
  <>
    <p>Resize your viewport width to see the tab direction change</p>
    <Example direction={{ medium: "vert" }} />
  </>
);
