import * as React from "react";
import { Story, Meta } from "@storybook/react";

import {
  DangerText,
  InteractiveText,
  MonospaceText,
  SmallText,
  SuccessText,
  Text,
  WarningText
} from "../";
import { textAlignValues } from "../../../storybookHelpers/controlContants";
import { css } from "@emotion/css";

export default {
  title: "Typography/Text",
  component: Text,
  subComponents: {
    SuccessText,
    WarningText,
    DangerText,
    SmallText,
    MonospaceText,
    InteractiveText
  },
  argTypes: {
    color: {
      control: { type: "color" }
    },
    size: {
      options: ["s", "m", "l", "xl"],
      control: { type: "select" }
    },
    weight: {
      options: ["normal", "medium"],
      control: { type: "inline-radio" }
    },
    align: {
      options: textAlignValues,
      control: { type: "select" }
    },
    wrap: {
      options: ["truncate", "nowrap", "wrap"],
      control: { type: "inline-radio" }
    },
    tag: {
      options: ["p", "span"],
      control: { type: "inline-radio" }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  },
  args: {
    weight: "normal",
    align: "inherit"
  }
} as Meta;

const loremIpsum = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book. It has survived not only five centuries, but also
  the leap into electronic typesetting, remaining essentially unchanged. It
  was popularised in the 1960s with the release of Letraset sheets containing
  Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.
`;

const Template: Story = args => <Text {...args}>{loremIpsum}</Text>;

export const DefaultText = Template.bind({});

export const ResponsiveSize: Story = args => (
  <>
    <p
      className={css`
        font-weight: 500;
      `}
    >
      Resize your viewport width to see the text below change size responsively.
    </p>
    <Text {...args}>{loremIpsum}</Text>
  </>
);

ResponsiveSize.args = {
  size: {
    default: "s",
    medium: "m",
    large: "l",
    jumbo: "xl"
  }
};

export const _SuccessText = args => (
  <SuccessText {...args}>Success Text</SuccessText>
);

_SuccessText.parameters = {
  controls: {
    exclude: ["color"]
  }
};

export const _WarningText = args => (
  <WarningText {...args}>Warning Text</WarningText>
);

_WarningText.parameters = {
  controls: {
    exclude: ["color"]
  }
};

export const _DangerText = args => (
  <DangerText {...args}>Danger Text</DangerText>
);

_DangerText.parameters = {
  controls: {
    exclude: ["color"]
  }
};

export const _SmallText = args => <SmallText {...args}>Small Text</SmallText>;

export const _MonospaceText = args => (
  <MonospaceText {...args}>Monospace Text</MonospaceText>
);

export const _InteractiveText = args => (
  <InteractiveText {...args}>Interactive Text</InteractiveText>
);

_InteractiveText.parameters = {
  controls: {
    exclude: ["color"]
  }
};
