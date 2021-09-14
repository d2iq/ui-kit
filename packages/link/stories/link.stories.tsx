import * as React from "react";
import { Link, ResetLink } from "..";
import { Text } from "../../styleUtils/typography";

export default {
  title: "Navigation/Link",
  component: Link,
  subcomponents: { ResetLink }
};

export const Default = () => <Link url="http://google.com/">Go to Google</Link>;

export const OpenLinkInNewTab = () => (
  <Link url="http://google.com/" openInNewTab={true}>
    Go to Google in a new tab
  </Link>
);

export const _ResetLink = () => (
  <div>
    The{" "}
    <Text tag="span" color="red">
      <ResetLink url="http://google.com">red text</ResetLink>
    </Text>{" "}
    is a link, but it is not styled like one
  </div>
);
