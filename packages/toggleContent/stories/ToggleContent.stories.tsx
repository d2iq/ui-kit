import * as React from "react";
import { Card, ToggleContent } from "../../index";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleContentProps } from "../components/ToggleContent";

const ToggleComponent = ({ componentName }): JSX.Element => {
  return (
    <div
      style={{
        maxWidth: "25rem",
        textAlign: "center"
      }}
    >
      <Card>{componentName}</Card>
    </div>
  );
};

export default {
  title: "Utils/ToggleContent",
  component: ToggleContent
} as Meta;

export const Default = {
  args: { contentOn: "On", contentOff: "Off" }
};

export const ToggleComponents = {
  args: {
    contentOn: <ToggleComponent componentName="Primary Component" />,
    contentOff: <ToggleComponent componentName="Secondary Component" />
  }
};
