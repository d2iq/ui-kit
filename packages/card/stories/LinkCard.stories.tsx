import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import LinkCard from "../components/LinkCard";

const readme = require("../README.md");

storiesOf("Card/LinkCard", module)
  .addDecorator(withReadme([readme]))
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
  ));
