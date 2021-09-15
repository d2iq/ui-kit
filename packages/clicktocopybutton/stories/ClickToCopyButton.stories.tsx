import * as React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import { ClickToCopyButton } from "../";
import { Stack } from "../../";
import {
  blue,
  green,
  purple,
  red,
  textColorPrimary,
  textColorSecondary,
  yellow
} from "../../design-tokens/build/js/designTokens";
import { iconSizes } from "../../shared/styles/styleUtils/layout/iconSizes";

const textToCopy = "Nobody likes a copycat";
const colors = {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
};

const sizes = Object.keys(iconSizes).reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});

export default {
  title: "Actions/ClickToCopyButton",
  decorators: [withKnobs],
  component: ClickToCopyButton
};

export const Default = () => <ClickToCopyButton textToCopy={textToCopy} />;

export const OnCopyCallback = () => {
  const onCopyFn = () => {
    alert("oncopy");
  };
  return <ClickToCopyButton textToCopy={textToCopy} onCopy={onCopyFn} />;
};

export const CustomColor = () => {
  const color = select("Color", colors, blue);
  return (
    <Stack>
      <div>
        <ClickToCopyButton textToCopy={textToCopy} color={color} />
      </div>
      <div>
        <ClickToCopyButton textToCopy={textToCopy} color={color}>
          <div>{`Click here to copy the text: "${textToCopy}"`}</div>
        </ClickToCopyButton>
      </div>
      <p>Use the knobs panel to change the text and icon colors</p>
    </Stack>
  );
};

export const CustomIconSize = () => {
  const size = select("Size", sizes, "xs");
  return (
    <Stack>
      <div>
        <ClickToCopyButton textToCopy={textToCopy} iconSize={size} />
      </div>
      <p>Use the knobs panel to change the icon size</p>
    </Stack>
  );
};

export const ShowCustomTooltipContentOnCopy = () => (
  <ClickToCopyButton
    textToCopy={textToCopy}
    tooltipContent={`"${textToCopy}" copied`}
  />
);

export const WithCustomChildren = () => (
  <ClickToCopyButton textToCopy={textToCopy}>
    <div>{`Click here to copy the text: "${textToCopy}"`}</div>
  </ClickToCopyButton>
);
