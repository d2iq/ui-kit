import * as React from "react";
import styled from "@emotion/styled";

const InputStoryWrapper = styled("div")`
  max-width: 300px;

  & > * {
    margin-bottom: 1.5em;
  }
`;

export const inputStoryWrapper = storyFn => (
  <InputStoryWrapper>{storyFn()}</InputStoryWrapper>
);
