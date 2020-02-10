import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TabTitle, Tabs, TabItem } from "../index";
import { TabDirection, TabSpacing } from "../components/Tabs";

const readme = require("../README.md");

class Example extends React.Component<
  { direction?: TabDirection; spacing?: TabSpacing },
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
        spacing={this.props.spacing}
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

storiesOf("Tabs", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <Example />)
  .add("vertical", () => <Example direction="vert" />)
  .add("responsive", () => (
    <>
      <p>Resize your viewport width to see the tab direction change</p>
      <Example direction={{ medium: "vert" }} />
    </>
  ))
  .add("with large spacing", () => <Example spacing="large" />)
  .add("with large spacing vertical", () => (
    <Example spacing="large" direction="vert" />
  ));
