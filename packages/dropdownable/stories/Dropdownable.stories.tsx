import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withInfo } from "@storybook/addon-info";

const readme = require("../README.md");

import Dropdownable, { Direction } from "../components/Dropdownable";
import DropdownStuffContainer from "./helpers/DropdownStuffContainer";

class DropdownStory extends React.PureComponent<
  { preferredDirections: Direction[]; dropdownWidth: string },
  { open: boolean }
> {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { preferredDirections, dropdownWidth } = this.props;

    return (
      <div style={{ minHeight: "200px" }}>
        <Dropdownable
          open={this.state.open}
          onClose={this.handleClose}
          preferredDirections={preferredDirections}
          dropdown={
            <DropdownStuffContainer width={dropdownWidth}>
              <p>I'm positioned relative to my children</p>
              <p>Click outside to dismiss</p>
              <p>Also try resizing</p>
            </DropdownStuffContainer>
          }
        >
          <button onClick={this.handleOpen}>I prefer top-right</button>
        </Dropdownable>
      </div>
    );
  }
}

storiesOf("Dropdownable", module)
  .addDecorator(withReadme([readme]))
  .add(
    "enough space positioning",
    withInfo({ propTables: [Dropdownable] })(() => (
      <DropdownStory
        dropdownWidth={`${document.body.clientWidth - 140}px`}
        preferredDirections={[Direction.TopRight, Direction.BottomLeft]}
      />
    ))
  )
  .add(
    "not enough space positioning",
    withInfo({ propTables: [Dropdownable] })(() => (
      <DropdownStory
        dropdownWidth={`${document.body.clientWidth - 20}px`}
        preferredDirections={[Direction.TopRight, Direction.BottomLeft]}
      />
    ))
  )
  .add(
    "match width to children",
    withInfo({ propTables: [Dropdownable] })(() => (
      <Dropdownable
        open={true}
        matchWidth={true}
        dropdown={
          <DropdownStuffContainer>
            <p>I'm positioned relative to my children</p>
            <p>You can't dismiss me because I'm always open</p>
            <p>Also try resizing</p>
          </DropdownStuffContainer>
        }
      >
        <button>Dropdown will match the width of me if you ask of it</button>
      </Dropdownable>
    ))
  );
