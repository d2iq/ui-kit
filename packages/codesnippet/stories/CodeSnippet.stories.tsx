import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { CodeSnippet } from "../index";
import ClickToCopyTooltipHelper from "../../clicktocopybutton/stories/helpers/ClickToCopyTooltipHelper";
import Tooltip from "../../tooltip/components/Tooltip";

const readme = require("../README.md");

const snippetContent = `cd ui-kit && npm start`;

storiesOf("CodeSnippet", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <CodeSnippet>{snippetContent}</CodeSnippet>)
  .add("with textToCopy", () => (
    <CodeSnippet textToCopy={snippetContent}>{snippetContent}</CodeSnippet>
  ))
  .add("with textToCopy + show tooltip onCopy", () => (
    <ClickToCopyTooltipHelper>
      {({ onCopy, tooltipIsVisible }) => (
        <Tooltip
          id="tooltipDemo"
          trigger={
            <CodeSnippet textToCopy={snippetContent} onCopy={onCopy}>
              {snippetContent}
            </CodeSnippet>
          }
          open={tooltipIsVisible}
          suppress={true}
        >
          "{snippetContent}" copied
        </Tooltip>
      )}
    </ClickToCopyTooltipHelper>
  ));
