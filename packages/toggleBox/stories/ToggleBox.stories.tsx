import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleBox } from "../index";
import { ToggleBoxProps } from "../components/ToggleBox";

export default {
  title: "Forms/ToggleBox",
  component: ToggleBox
} as Meta;

const Template: StoryFn<ToggleBoxProps> = args => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };

  return (
    <ToggleBox
      id="default"
      isActive={isActive}
      onChange={handleChange}
      {...args}
    >
      Default
    </ToggleBox>
  );
};

export const Default = {
  render: Template
};
