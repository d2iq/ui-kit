import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText2 } from "../index";

import readme from "../README.md";

storiesOf("Typography|HeadingText2", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => <HeadingText2>Secondary Heading</HeadingText2>)
  .add("custom HTML tag", () => (
    <HeadingText2 tag="h3">{`Using a <h3> tag`}</HeadingText2>
  ));
