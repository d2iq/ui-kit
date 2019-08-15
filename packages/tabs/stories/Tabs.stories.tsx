import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TabTitle, Tabs, TabItem } from "../index";

const readme = require("../README.md");

class Example extends React.Component<{}, Partial<{ selectedIndex: number }>> {
  state = { selectedIndex: 0 };
  handleSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };
  render() {
    const { selectedIndex } = this.state;
    return (
      <Tabs selectedIndex={selectedIndex} onSelect={this.handleSelect}>
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

storiesOf("Tabs", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <Example />);
