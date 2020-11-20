import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ToggleWrapper } from "../index";

import readme from "../README.md";

storiesOf("Utils|ToggleWrapper", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => (
    <ToggleWrapper>
      {({ isActive }) => (
        <div>
          the isActive render prop returns:
          <pre>{`${isActive}`}</pre>
        </div>
      )}
    </ToggleWrapper>
  ))
  .add("isActive", () => (
    <ToggleWrapper isActive={true}>
      {({ isActive }) => (
        <div>
          the isActive render prop returns:
          <pre>{`${isActive}`}</pre>
        </div>
      )}
    </ToggleWrapper>
  ));
