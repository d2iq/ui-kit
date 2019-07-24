import * as React from "react";
import { padding } from "../../shared/styles/styleUtils";
import styled from "react-emotion";

const ConfigurationMap = styled("div")`
  ${padding("bottom", "l")};
`;

export default ({ children }) => (
  <ConfigurationMap data-cy="configurationMap">{children}</ConfigurationMap>
);
