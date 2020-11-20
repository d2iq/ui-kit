import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText1 } from "../index";

import readme from "../README.md";

storiesOf("Typography|HeadingText1", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addDecorator(withKnobs)
  .add("default", () => <HeadingText1>Primary Heading</HeadingText1>)
  .add("custom HTML tag", () => (
    <HeadingText1 tag="h2">{`Using a <h2> tag`}</HeadingText1>
  ));
