import * as React from "react";
import styled from "@emotion/styled";
import { configurationMapRow, showActionOnHoverStyle } from "../style";
import { flex, padding, border } from "../../shared/styles/styleUtils";

interface ConfigurationMapRowProps {
  children: React.ReactNode;
  onlyShowActionOnHover?: boolean;
}

const ConfigurationMapRow = styled("div")<ConfigurationMapRowProps>`
  ${props => showActionOnHoverStyle(props.onlyShowActionOnHover)};
  ${configurationMapRow};
  ${border("bottom")};
  ${flex()};
  ${padding("vert", "xs")};
`;

export default (props: ConfigurationMapRowProps) => (
  <ConfigurationMapRow
    onlyShowActionOnHover={props.onlyShowActionOnHover}
    data-cy="configurationMapRow"
  >
    {props.children}
  </ConfigurationMapRow>
);
