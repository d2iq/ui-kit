import * as React from "react";

import { Breadcrumb, BreadcrumbItem } from "../index";

import { action } from "@storybook/addon-actions";
import { ProductIcons } from "../../icons/dist/product-icons-enum";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem }
};

export const Default = () => (
  <Breadcrumb>
    <span>One</span>
    <span>Two</span>
  </Breadcrumb>
);

export const WithBreadcrumbItems = () => (
  <Breadcrumb>
    <BreadcrumbItem
      icon={ProductIcons.Gear}
      onClick={action("clicked breadcrumb item one")}
    >
      One
    </BreadcrumbItem>
    <BreadcrumbItem onClick={action("clicked breadcrumb item two")}>
      Two
    </BreadcrumbItem>
    <BreadcrumbItem onClick={action("clicked breadcrumb item three")}>
      Three
    </BreadcrumbItem>
  </Breadcrumb>
);

WithBreadcrumbItems.storyName = "With BreadcrumbItem";
