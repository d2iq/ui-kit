import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { InfoBoxInline } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";

import readme from "../README.md";

storiesOf("Feedback|InfoBoxInline", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addParameters({
    info: {
      propTablesExclude: [InfoBoxStoryContainer]
    }
  })
  .add("default", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline message="This is message is an example of how we might inform the user in DCOS" />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("info", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          appearance="info"
          message="This is message is an example of how we might inform the user in DCOS"
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("success", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          appearance="success"
          message="This is message is an example of how we might inform the user in DCOS"
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("warning", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          appearance="warning"
          message="This is message is an example of how we might inform the user in DCOS"
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("danger", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          appearance="danger"
          message="This is message is an example of how we might inform the user in DCOS"
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("message as custom markup", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
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
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("1 action", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          message="This is message is an example of how we might inform the user in DCOS"
          primaryAction={<PrimaryAction />}
        />
      </div>
    </InfoBoxStoryContainer>
  ))
  .add("2 actions", () => (
    <InfoBoxStoryContainer>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <InfoBoxInline
          message="This is message is an example of how we might inform the user in DCOS"
          primaryAction={<PrimaryAction />}
          secondaryAction={<SecondaryAction />}
        />
      </div>
    </InfoBoxStoryContainer>
  ));
