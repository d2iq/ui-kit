import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { PageHeader } from "../index";
import { Clickable } from "../../clickable";

const readme = require("../README.md");
const action = () => alert("Action 1 triggered");

storiesOf("PageHeader", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <PageHeader
      breadcrumbElements={[
        <span key="ElementOne">One</span>,
        <span key="ElementTwo">Two</span>
      ]}
      actions={[
        <Clickable key="Action1" action={action}>
          <div>Action 1</div>
        </Clickable>
      ]}
    />
  ));
