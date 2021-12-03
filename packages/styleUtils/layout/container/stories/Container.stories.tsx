import * as React from "react";
import Container, { ContainerProps } from "../components/Container";
import { Story, Meta } from "@storybook/react";
import {
  themeBgPrimary,
  themeBgSecondary
} from "../../../../design-tokens/build/js/designTokens";
import { css } from "@emotion/css";

const baseBg = css`
  background-color: ${themeBgSecondary};
`;

const contentBg = css`
  background-color: ${themeBgPrimary};
`;

export default {
  title: "Layout/Container",
  component: Container
} as Meta;

const Template: Story<ContainerProps> = args => (
  <div className={baseBg}>
    <Container {...args}>
      <div className={contentBg}>
        <p>Content is centered and the width is kept to a reasonable size</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Container>
  </div>
);

export const Default = Template.bind({});
