import * as React from "react";
import { padding } from "../../shared/styles/styleUtils";
import styled from "react-emotion";
import { dlReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

const ConfigurationMapSection = styled("dl")`
  ${dlReset};
  ${padding("bottom", "l")};
`;

export default ({ children }) => (
  <ConfigurationMapSection data-cy="configurationMapSection">
    {children}
  </ConfigurationMapSection>
);
