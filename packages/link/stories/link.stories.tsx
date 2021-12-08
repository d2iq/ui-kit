import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Link, ResetLink } from "..";
import { Text } from "../../styleUtils/typography";
import { LinkProps } from "../types";

export default {
  title: "Navigation/Link",
  component: Link,
  subcomponents: { ResetLink }
};

const Template: Story<LinkProps> = args => (
  <Link url="http://google.com/" openInNewTab={true} {...args}>
    Go to Google
  </Link>
);
export const Default = Template.bind({});

export const _ResetLink = args => (
  <div>
    The{" "}
    <Text tag="span" color="red">
      <ResetLink {...args} url="http://google.com">
        red text
      </ResetLink>
    </Text>{" "}
    is a link, but it is not styled like one.
  </div>
);
