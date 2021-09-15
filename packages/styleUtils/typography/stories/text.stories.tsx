import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import {
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorSecondary,
  blue
} from "../../../design-tokens/build/js/designTokens";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

import { Text } from "../";

type WrapVals = "truncate" | "nowrap" | "wrap";

export default {
  title: "Typography/Text",
  decorators: [withKnobs],
  component: Text
};

export const Default = () => (
  <Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </Text>
);

export const Align = () => {
  const textAlignments = {
    left: "left",
    right: "right",
    center: "center"
  };
  const align = select("align", textAlignments, "center");

  return (
    <Text align={align as React.CSSProperties["textAlign"]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text>
  );
};

export const Wrap = () => {
  const wrapVals = {
    wrap: "wrap",
    nowrap: "nowrap",
    truncate: "truncate"
  };
  const wrap = select("wrap", wrapVals, "wrap");

  return (
    <div>
      <p>Use the Knobs panel to change how text wraps</p>
      <div style={{ width: "300px" }}>
        <Text wrap={wrap as WrapVals}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
    </div>
  );
};

export const Size = () => {
  const sizes = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const size = select("size", sizes, "m");

  return (
    <Text size={size as FontSize}>
      Use the Knobs panel to change the font size
    </Text>
  );
};

export const ResponsiveSize = () => {
  return (
    <Text
      size={{
        default: "s",
        medium: "m",
        large: "l",
        jumbo: "xl"
      }}
    >
      Change the width of your viewport to see the font size change
    </Text>
  );
};

export const Color = () => {
  const colors = {
    themeTextColorPrimary,
    themeTextColorSecondary,
    themeTextColorDisabled,
    blue
  };
  const color = select("color", colors, themeTextColorPrimary);

  return (
    <Text color={color}>Use the Knobs panel to change the text color</Text>
  );
};

export const MediumWeight = () => (
  <Text weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </Text>
);

export const CustomTag = () => (
  <Text tag="span">{`This text is in a <span> tag`}</Text>
);

export const NestedTag = () => (
  <Text>
    <span>{`This text is in a <span> tag passed as a child`}</span>
  </Text>
);
