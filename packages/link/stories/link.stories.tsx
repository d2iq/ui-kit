import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Link, ResetLink } from "..";
import { Text } from "../../styleUtils/typography";

import readme from "../README.md";

storiesOf("Navigation|Link", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addParameters({
    info: {
      propTablesExclude: [Text]
    }
  })
  .add("default", () => <Link url="http://google.com/">Go to Google</Link>)
  .add("open link in new tab", () => (
    <Link url="http://google.com/" openInNewTab={true}>
      Go to Google in a new tab
    </Link>
  ))
  .add("ResetLink", () => (
    <div>
      The{" "}
      <Text tag="span" color="red">
        <ResetLink url="http://google.com">red text</ResetLink>
      </Text>{" "}
      is a link, but it is not styled like one
    </div>
  ));
