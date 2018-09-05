import { default as Cell } from "./Cell";
import styled from "react-emotion";
import { textTruncate } from "../../shared/styles/styleUtils";

export default styled(Cell)`
  ${textTruncate};
`;
