import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ButtonCard, Card, LinkCard } from "../index";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

export default {
  title: "Layout/Card",
  decorators: [withKnobs],
  component: Card,
  subcomponents: { ButtonCard, LinkCard }
};

export const Default = () => <Card>default</Card>;

export const PaddingSize = () => {
  const sizes = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const size = select("paddingSize", sizes, "m");

  return (
    <Card paddingSize={size as SpaceSize}>
      Use the Knobs panel to change the padding
    </Card>
  );
};

export const ResponsivePaddingSize = () => (
  <Card
    paddingSize={{
      default: "s",
      small: "m",
      medium: "l",
      large: "xl",
      jumbo: "xxl"
    }}
  >
    Resize the viewport to see the padding change
  </Card>
);

export const AspectRatio = () => (
  <div style={{ maxWidth: "400px" }}>
    <Card aspectRatio={[2, 1]}>I stay at a 2:1 aspect ratio</Card>
  </div>
);

AspectRatio.storyName = "2:1 aspect ratio";

export const DefaultLinkCard = () => (
  <LinkCard url="http://google.com" linkDescription="Google">
    default
  </LinkCard>
);

export const DefaultButtonCard = () => <ButtonCard>default</ButtonCard>;
