import * as React from "react";

import { Breadcrumb } from "../index";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb
};

export const Default = () => (
  <Breadcrumb>
    <span>One</span>
    <span>
      T<em>wo</em>
    </span>
  </Breadcrumb>
);

export const TopLevelBreadcrumb = () => (
  <Breadcrumb>
    <span>One</span>
  </Breadcrumb>
);
