import * as React from "react";
import { InfoBoxInline } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";

export default {
  title: "Feedback/InfoBoxInline",
  component: InfoBoxInline
};

export const Default = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline message="This is message is an example of how we might inform the user in DCOS" />
    </div>
  </InfoBoxStoryContainer>
);

export const Info = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        appearance="info"
        message="This is message is an example of how we might inform the user in DCOS"
      />
    </div>
  </InfoBoxStoryContainer>
);

export const Success = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        appearance="success"
        message="This is message is an example of how we might inform the user in DCOS"
      />
    </div>
  </InfoBoxStoryContainer>
);

export const Warning = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        appearance="warning"
        message="This is message is an example of how we might inform the user in DCOS"
      />
    </div>
  </InfoBoxStoryContainer>
);

export const Danger = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        appearance="danger"
        message="This is message is an example of how we might inform the user in DCOS"
      />
    </div>
  </InfoBoxStoryContainer>
);

export const MessageAsCustomMarkup = () => (
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
);

export const OneAction = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        message="This is message is an example of how we might inform the user in DCOS"
        primaryAction={<PrimaryAction />}
      />
    </div>
  </InfoBoxStoryContainer>
);

export const TwoActions = () => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        message="This is message is an example of how we might inform the user in DCOS"
        primaryAction={<PrimaryAction />}
        secondaryAction={<SecondaryAction />}
      />
    </div>
  </InfoBoxStoryContainer>
);
