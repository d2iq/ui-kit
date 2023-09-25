import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem } from "../index";
import { action } from "@storybook/addon-actions";
import { ProductIcons } from "../../icons/dist/product-icons-enum";
import { BreadcrumbProps } from "../components/Breadcrumb";

// Filter out "Inverse" product icons for this story
const filteredProductIcons = Object.keys(ProductIcons)
  .filter(key => !key.includes("Inverse"))
  .reduce((obj, key) => {
    obj[key] = ProductIcons[key];
    return obj;
  }, {});

export default {
  title: "Navigation/Breadcrumb",
  component: BreadcrumbItem,
  subcomponents: { Breadcrumb },
  argTypes: {
    icon: {
      options: Object.keys(filteredProductIcons),
      mapping: filteredProductIcons
    }
  }
} as Meta;

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
