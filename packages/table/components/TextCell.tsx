import { default as Cell } from "./Cell";
import styled from "react-emotion";
import { textTruncate } from "@dcos/ui-kit-shared/dist/styles/styleUtils";

//remove the ignore
//@ts-ignore
export default styled(Cell)`
  ${textTruncate};
`;
