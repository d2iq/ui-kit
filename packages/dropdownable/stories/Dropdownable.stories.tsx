import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withInfo } from "@storybook/addon-info";
import { selectV2 } from "@storybook/addon-knobs";
import { css } from "react-emotion";

const readme = require("../README.md");

import { PrimaryButton } from "../../button";
import Dropdownable, { Direction } from "../components/Dropdownable";
import DropdownStuffContainer from "./helpers/DropdownStuffContainer";

class DropdownStory extends React.PureComponent<
  { preferredDirection: Direction },
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
    const { preferredDirection } = this.props;

    const containerStyle = css`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
    `;

    return (
      <div className={containerStyle}>
        <Dropdownable
          open={this.state.open}
          onClose={this.handleClose}
          preferredDirections={[preferredDirection]}
          dropdown={
            <DropdownStuffContainer>
              <p>Positioned relative to children</p>
              <p>Click outside to dismiss</p>
              <p>Also try resizing</p>
            </DropdownStuffContainer>
          }
        >
          <PrimaryButton onClick={this.handleOpen}>
            Change dropdown orientation using knobs
          </PrimaryButton>
        </Dropdownable>
      </div>
    );
  }
}

storiesOf("Dropdownable", module)
  .addDecorator(withReadme([readme]))
  .add(
    "with custom direction",
    withInfo({
      propTables: [Dropdownable]
    })(() => {
      const options = {
        BottomLeft: "bottom-left",
        BottomRight: "bottom-right",
        TopLeft: "top-left",
        TopRight: "top-right"
      };

      const knobDirection = selectV2("Direction", options, "BottomLeft");

      function getKeyByValue(value): string {
        return (
          Object.keys(options).find(key => options[key] === value) ||
          "BottomLeft"
        );
      }

      return (
        <DropdownStory
          preferredDirection={Direction[getKeyByValue(knobDirection)]}
        />
      );
    })
  );
