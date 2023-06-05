import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem } from "../index";
import { action } from "@storybook/addon-actions";
import { ProductIcons } from "../../icons/dist/product-icons-enum";
import { BreadcrumbProps } from "../components/Breadcrumb";

export default {
  title: "Navigation/Breadcrumb",
  component: BreadcrumbItem,
  subcomponents: { Breadcrumb },
  argTypes: {
    icon: {
      options: [ProductIcons.Gear, ProductIcons.Cluster, ProductIcons.Users],
      type: "select"
    }
  }
};

const Template: StoryFn<BreadcrumbProps> = args => (
  <Breadcrumb>
    <BreadcrumbItem
      icon={ProductIcons.Gear}
      onClick={action("clicked breadcrumb item one")}
      {...args}
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

export const Default = {
  render: Template
};
