import * as React from "react";
import styled from "@emotion/styled";

const ConfigurationMapStoryWrapperComponent = styled("div")`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;

export const configurationMapStoryWrapper = storyFn => (
  <ConfigurationMapStoryWrapperComponent>
    {storyFn()}
  </ConfigurationMapStoryWrapperComponent>
);
