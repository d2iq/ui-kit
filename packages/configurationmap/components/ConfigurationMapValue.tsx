import * as React from "react";
import { flexItem, breakWord } from "../../shared/styles/styleUtils";
import styled from "react-emotion";
import { ddReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

const ConfigurationMapValue = styled("dd")`
  ${ddReset};
  ${flexItem("grow")};
  ${breakWord};
`;

export default ({ children }) => (
  <ConfigurationMapValue data-cy="configurationMapValue">
    {children}
  </ConfigurationMapValue>
);
