import * as React from "react";
import { Story, Meta } from "@storybook/react";

import SlideToggle, { SlideToggleProps } from "../components/SlideToggle";

export default {
  title: "Forms/SlideToggle",
  component: SlideToggle,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    },
    inputLabel: {
      control: {
        type: "text"
      },
      defaultValue: "Default"
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    errors: {
      control: { disable: true }
    }
  }
};

const Template: Story = args => {
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <SlideToggle
      id="toggle"
      inputLabel="Toggle Me"
      value="unchecked"
      checked={checked}
      onClick={handleClick}
      {...args}
    />
  );
};

export const Default = Template.bind({});
