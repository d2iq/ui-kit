import * as React from "react";
import { flexItem } from "../../shared/styles/styleUtils";
import styled from "react-emotion";
import { ddReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

const ConfigurationMapValue = styled("dd")`
  ${ddReset};
  ${flexItem("grow")};
`;

export default ({ children }) => (
  <ConfigurationMapValue data-cy="configurationMapValue">
    {children}
  </ConfigurationMapValue>
);
