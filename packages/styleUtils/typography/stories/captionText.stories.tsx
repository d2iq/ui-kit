import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { CaptionText } from "../index";

import readme from "../README.md";

storiesOf("Typography|CaptionText", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => (
    <CaptionText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </CaptionText>
  ));
