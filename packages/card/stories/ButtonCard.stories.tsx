import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import ButtonCard from "../components/ButtonCard";
import { SpacingBox } from "../../styleUtils/modifiers";

const readme = require("../README.md");

storiesOf("Actions|ButtonCard", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme([readme]))
  .add("default", () => <ButtonCard>default</ButtonCard>)
  .add("active", () => <ButtonCard isActive={true}>isActive</ButtonCard>)
  .add("disabled", () => (
    <React.Fragment>
      <SpacingBox side="bottom">
        <ButtonCard disabled={true}>disabled</ButtonCard>
      </SpacingBox>
      <ButtonCard disabled={true} isActive={true}>
        disabled + isActive
      </ButtonCard>
    </React.Fragment>
  ))
  .add("with onClick", () => (
    <ButtonCard onClick={action("button clicked")}>default</ButtonCard>
  ))
  .add("paddingSize", () => {
    const sizes = {
      s: "s",
      m: "m",
      l: "l",
      xl: "xl"
    };
    const size = select("paddingSize", sizes, "m");

    return (
      <ButtonCard paddingSize={size as SpaceSize}>
        Use the Knobs panel to change the padding
      </ButtonCard>
    );
  })
  .add("responsive paddingSize", () => (
    <ButtonCard
      paddingSize={{
        default: "s",
        small: "m",
        medium: "l",
        large: "xl",
        jumbo: "xxl"
      }}
    >
      Resize the viewport to see the padding change
    </ButtonCard>
  ))
  .add("2:1 aspect ratio", () => (
    <div style={{ maxWidth: "400px" }}>
      <ButtonCard aspectRatio={[2, 1]}>I stay at a 2:1 aspect ratio</ButtonCard>
    </div>
  ));
