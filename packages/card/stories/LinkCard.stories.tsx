import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import LinkCard from "../components/LinkCard";

const readme = require("../README.md");

storiesOf("Navigation|LinkCard", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <LinkCard url="http://google.com" linkDescription="Google">
      default
    </LinkCard>
  ))
  .add("external", () => (
    <LinkCard
      url="http://google.com"
      linkDescription="Google"
      openInNewTab={true}
    >
      default
    </LinkCard>
  ))
  .add("paddingSize", () => {
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
  })
  .add("responsive paddingSize", () => (
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
  ))
  .add("2:1 aspect ratio", () => (
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
  ));
