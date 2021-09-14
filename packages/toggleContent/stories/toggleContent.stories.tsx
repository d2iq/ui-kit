import * as React from "react";
import { ToggleContent } from "../../index";
import { withKnobs } from "@storybook/addon-knobs";

const primary = () => <div>primary component</div>;
const secondary = () => <div>secondary component</div>;

export default {
  title: "Utils/Toggle",
  component: ToggleContent,
  decorators: [withKnobs]
};

export const ToggleText = () => (
  <ToggleContent contentOn="Hello" contentOff="Bye" />
);

export const ToggleComponent = () => (
  <ToggleContent contentOn={primary()} contentOff={secondary()} />
);
