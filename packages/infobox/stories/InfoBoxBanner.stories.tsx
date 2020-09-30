import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import { InfoBoxBanner } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";

const readme = require("../README.md");

storiesOf("Feedback|InfoBoxBanner", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [InfoBoxStoryContainer]
    }
  })
  .add("default", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        message="This is message is an example of how we might inform the user in DCOS"
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("info", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        appearance="info"
        message="This is message is an example of how we might inform the user in DCOS"
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("success", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        appearance="success"
        message="This is message is an example of how we might inform the user in DCOS"
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("warning", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        appearance="warning"
        message="This is message is an example of how we might inform the user in DCOS"
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("danger", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        appearance="danger"
        message="This is message is an example of how we might inform the user in DCOS"
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("message as custom markup", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        message={
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                margin: 0,
                paddingBottom: ".5rem"
              }}
            >
              <span style={{ fontWeight: 600 }}>There is something</span> that
              we need to tell you about
            </h3>
            <p style={{ fontSize: ".8rem", margin: 0 }}>
              And that something is detailed enough to require two lines and
              some custom formatting
            </p>
          </div>
        }
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("1 action", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        message="This is message is an example of how we might inform the user in DCOS"
        primaryAction={<PrimaryAction />}
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ))
  .add("2 actions", () => (
    <InfoBoxStoryContainer>
      <InfoBoxBanner
        message="This is message is an example of how we might inform the user in DCOS"
        primaryAction={<PrimaryAction />}
        secondaryAction={<SecondaryAction />}
        onDismiss={action("dismissed")}
      />
    </InfoBoxStoryContainer>
  ));
