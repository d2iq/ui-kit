import { default as Cell } from "./Cell";
import styled from "react-emotion";

export default styled(Cell)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
