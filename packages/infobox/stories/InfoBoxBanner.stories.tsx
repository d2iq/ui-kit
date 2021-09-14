import * as React from "react";
import { action } from "@storybook/addon-actions";
import { InfoBoxBanner } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";

export default {
  title: "Feedback/InfoBoxBanner",
  component: InfoBoxBanner
};

export const Default = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      message="This is message is an example of how we might inform the user in DCOS"
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const Info = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      appearance="info"
      message="This is message is an example of how we might inform the user in DCOS"
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const Success = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      appearance="success"
      message="This is message is an example of how we might inform the user in DCOS"
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const Warning = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      appearance="warning"
      message="This is message is an example of how we might inform the user in DCOS"
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const Danger = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      appearance="danger"
      message="This is message is an example of how we might inform the user in DCOS"
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const MessageAsCustomMarkup = () => (
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
            <span style={{ fontWeight: 600 }}>There is something</span> that we
            need to tell you about
          </h3>
          <p style={{ fontSize: ".8rem", margin: 0 }}>
            And that something is detailed enough to require two lines and some
            custom formatting
          </p>
        </div>
      }
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const OneAction = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      message="This is message is an example of how we might inform the user in DCOS"
      primaryAction={<PrimaryAction />}
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);

export const TwoActions = () => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner
      message="This is message is an example of how we might inform the user in DCOS"
      primaryAction={<PrimaryAction />}
      secondaryAction={<SecondaryAction />}
      onDismiss={action("dismissed")}
    />
  </InfoBoxStoryContainer>
);
