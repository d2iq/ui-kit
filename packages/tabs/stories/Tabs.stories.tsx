import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TabTitle, Tabs, TabItem } from "../index";
import { TabDirection } from "../components/Tabs";

const readme = require("../README.md");

class Example extends React.Component<
  { direction?: TabDirection },
  Partial<{ selectedIndex: number }>
> {
  state = { selectedIndex: 0 };
  handleSelect = selectedIndex => {
    this.setState({ selectedIndex });
    // tslint:disable-next-line:semicolon
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

storiesOf("Navigation|Tabs", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <Example />)
  .add("vertical", () => <Example direction="vert" />)
  .add("responsive", () => (
    <>
      <p>Resize your viewport width to see the tab direction change</p>
      <Example direction={{ medium: "vert" }} />
    </>
  ));
