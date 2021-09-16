import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import ButtonCard from "../components/ButtonCard";
import { SpacingBox } from "../../styleUtils/modifiers";

export default {
  title: "Actions/ButtonCard",
  decorators: [withKnobs],
  component: ButtonCard
};

export const Default = () => <ButtonCard>default</ButtonCard>;

export const Active = () => <ButtonCard isActive={true}>isActive</ButtonCard>;

export const Disabled = () => (
  <>
    <SpacingBox side="bottom">
      <ButtonCard disabled={true}>disabled</ButtonCard>
    </SpacingBox>
    <ButtonCard disabled={true} isActive={true}>
      disabled + isActive
    </ButtonCard>
  </>
);

export const WithOnClick = () => (
  <ButtonCard onClick={action("button clicked")}>default</ButtonCard>
);

export const PaddingSize = () => {
  const sizes = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const size = select("paddingSize", sizes, "m");

  return (
    <ButtonCard paddingSize={size as SpaceSize}>
      Use the Knobs panel to change the padding
    </ButtonCard>
  );
};

export const ResponsivePaddingSize = () => (
  <ButtonCard
    paddingSize={{
      default: "s",
      small: "m",
      medium: "l",
      large: "xl",
      jumbo: "xxl"
    }}
  >
    Resize the viewport to see the padding change
  </ButtonCard>
);

export const AspectRatio = () => (
  <div style={{ maxWidth: "400px" }}>
    <ButtonCard aspectRatio={[2, 1]}>I stay at a 2:1 aspect ratio</ButtonCard>
  </div>
);

AspectRatio.storyName = "2:1 Aspect Ratio";
