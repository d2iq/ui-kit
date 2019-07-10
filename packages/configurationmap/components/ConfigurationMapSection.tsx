import { padding } from "../../shared/styles/styleUtils";
import styled from "react-emotion";
import { dlReset } from "../../shared/styles/styleUtils/resets/definitionListReset";

export default styled("dl")`
  ${dlReset};
  ${padding("bottom", "l")};
`;
