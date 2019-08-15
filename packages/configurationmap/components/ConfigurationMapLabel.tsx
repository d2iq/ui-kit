import * as React from "react";
import { textWeight, padding } from "../../shared/styles/styleUtils";
import { configurationMapLabel } from "../style";
import styled from "react-emotion";

const ConfigurationMapLabel = styled("dt")`
  ${configurationMapLabel};
  ${padding("right", "s")};
  ${textWeight("medium")};
`;

export default ({ children }) => (
  <ConfigurationMapLabel data-cy="configurationMapLabel">
    {children}
  </ConfigurationMapLabel>
);
