import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Link, ResetLink } from "..";
import { Text } from "../../styleUtils/typography";
import { LinkProps } from "../types";

export default {
  title: "Navigation/Link",
  component: Link,
  subcomponents: { ResetLink }
};

const Template: StoryFn<LinkProps> = args => (
  <Link url="http://www.d2iq.com" openInNewTab={true} {...args}>
    Visit D2iQ
  </Link>
);
export const Default = {
  render: Template
};

export const _ResetLink = {
  render: args => (
    <div>
      <Text>
        ResetLink will reset inherited Link styles to take on new styles.
      </Text>
      <Text tag="span" color="red">
        <ResetLink {...args} url="http://d2iq.com">
          This red text is a link
        </ResetLink>
      </Text>{" "}
      that is inheriting color from a Text component.
    </div>
  )
};
