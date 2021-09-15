import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import LinkCard from "../components/LinkCard";

export default {
  title: "Navigation/LinkCard",
  decorators: [withKnobs],
  component: LinkCard
};

export const Default = () => (
  <LinkCard url="http://google.com" linkDescription="Google">
    default
  </LinkCard>
);

export const External = () => (
  <LinkCard
    url="http://google.com"
    linkDescription="Google"
    openInNewTab={true}
  >
    default
  </LinkCard>
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
    <LinkCard
      paddingSize={size as SpaceSize}
      url="http://google.com"
      openInNewTab={true}
      linkDescription="Google"
    >
      Use the Knobs panel to change the padding
    </LinkCard>
  );
};

export const ResponsivePaddingSize = () => (
  <LinkCard
    paddingSize={{
      default: "s",
      small: "m",
      medium: "l",
      large: "xl",
      jumbo: "xxl"
    }}
    url="http://google.com"
    openInNewTab={true}
    linkDescription="Google"
  >
    Resize the viewport to see the padding change
  </LinkCard>
);

export const AspectRatio = () => (
  <div style={{ maxWidth: "400px" }}>
    <LinkCard
      aspectRatio={[2, 1]}
      url="http://google.com"
      openInNewTab={true}
      linkDescription="Google"
    >
      I stay at a 2:1 aspect ratio
    </LinkCard>
  </div>
);

AspectRatio.storyName = "2:1 Aspect Ratio";
