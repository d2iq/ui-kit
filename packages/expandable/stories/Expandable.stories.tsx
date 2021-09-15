import * as React from "react";
import Expandable from "../components/Expandable";
import { tintText } from "../../shared/styles/styleUtils";

export default {
  title: "Actions/Expandable",
  component: Expandable
};

export const Default = () => (
  <Expandable label="Expand for content">
    <div>Check out this exciting content</div>
  </Expandable>
);

export const Opened = () => (
  <Expandable label="Expand for content" isOpen={true}>
    <div>Check out this other exciting content</div>
  </Expandable>
);

export const OpenedWithControlProp = () => (
  <Expandable label="Expand for content" isOpen={true} controlledIsOpen={true}>
    <div>You have to pass a boolean to `controlledIsOpen` to toggle this</div>
  </Expandable>
);

export const WithCustomLabelClassname = () => (
  <Expandable label="Expand for blue content" labelClassName={tintText("blue")}>
    <div>Check out this exciting blue content</div>
  </Expandable>
);

export const IndicatorIconOnRight = () => (
  <Expandable label="Expand for content" indicatorPosition="right">
    <div>Check out this exciting content with that right indicator</div>
  </Expandable>
);
