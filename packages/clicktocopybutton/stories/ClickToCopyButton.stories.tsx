import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ClickToCopyButton } from "../index";
import Tooltip from "../../tooltip/components/Tooltip";
import ClickToCopyTooltipHelper from "./helpers/ClickToCopyTooltipHelper";
import { Box } from "../../styleUtils/modifiers";

const readme = require("../README.md");
const textToCopy = "Nobody likes a copycat";

storiesOf("ClickToCopyButton", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <ClickToCopyButton textToCopy={textToCopy} />)
  .add("show tooltip onCopy", () => (
    <ClickToCopyTooltipHelper>
      {({ onCopy, tooltipIsVisible }) => (
        <Box display="inline-block">
          <Tooltip
            id="tooltipDemo"
            trigger={
              <ClickToCopyButton textToCopy={textToCopy} onCopy={onCopy} />
            }
            open={tooltipIsVisible}
            suppress={true}
          >
            "{textToCopy}" copied
          </Tooltip>
        </Box>
      )}
    </ClickToCopyTooltipHelper>
  ))
  .add("custom children", () => (
    <ClickToCopyButton textToCopy={textToCopy}>
      <div>{`Click here to copy the text: "${textToCopy}"`}</div>
    </ClickToCopyButton>
  ));
