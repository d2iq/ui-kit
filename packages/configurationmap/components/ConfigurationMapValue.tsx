import { flexItem } from "../../shared/styles/styleUtils";
import styled from "react-emotion";
import { ddReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

export default styled("dd")`
  ${ddReset};
  ${flexItem("grow")};
`;
