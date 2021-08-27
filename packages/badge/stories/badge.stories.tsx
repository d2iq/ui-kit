import * as React from "react";

import { Badge, BadgeButton, ColorCodedBadge } from "../../index";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
} from "../../design-tokens/build/js/designTokens";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const colors = {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
};

const shapes = {
  ["SystemIcons.CircleCheck"]: SystemIcons.CircleCheck,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users
};

export default {
  title: "Graphic Elements|Badge",
  component: Badge.type,
  subcomponents: { BadgeButton, ColorCodedBadge },
  decorators: [
    withKnobs,
    Story => (
      <div style={{ margin: "0 3em" }}>
        <Story />
      </div>
    )
  ]
};

export const Default = args => <Badge {...args}>Default</Badge>;

export const Primary = () => <Badge appearance="primary">Primary</Badge>;

export const Success = () => <Badge appearance="success">Success</Badge>;

export const Danger = () => <Badge appearance="danger">Danger</Badge>;

export const Warning = () => <Badge appearance="warning">Warning</Badge>;

export const Outline = () => <Badge appearance="outline">Outline</Badge>;

export const DefaultBadgeButton = () => (
  <BadgeButton onClick={action("badge button")}>Badge Button</BadgeButton>
);

export const DefaultColorCodedBadge = () => (
  <ColorCodedBadge color={select("Color", colors, blue)}>
    Color Coded Badge
  </ColorCodedBadge>
);

export const IconColorCodedBadge = () => (
  <>
    <ColorCodedBadge
      color={select("Color", colors, blue)}
      iconShape={select("Shape", shapes, SystemIcons.CircleCheck)}
    >
      Color Coded Badge with Icon
    </ColorCodedBadge>
  </>
);
