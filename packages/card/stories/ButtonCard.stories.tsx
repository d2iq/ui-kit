import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import ButtonCard from "../components/ButtonCard";
import { SpacingBox } from "../../styleUtils/modifiers";

const readme = require("../README.md");

storiesOf("Card/ButtonCard", module)
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
  ));
