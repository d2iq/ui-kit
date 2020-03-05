import * as React from "react";
import styled from "react-emotion";
import { margin } from "../../shared/styles/styleUtils";
import { dlReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

const ConfigurationMapSection = styled("dl")`
  ${dlReset};
  ${margin("bottom", "l")};
`;

export default ({ children }) => (
  <ConfigurationMapSection data-cy="configurationMapSection">
    {children}
  </ConfigurationMapSection>
);
