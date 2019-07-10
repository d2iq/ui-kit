import { configurationMapRow } from "../style";
import { css } from "emotion";
import styled from "react-emotion";
import {
  flex,
  padding,
  border,
  visuallyHidden,
  undoVisuallyHidden
} from "../../shared/styles/styleUtils";
import { rowActionStaticClassname } from "./ConfigurationMapRowAction";

interface ConfigurationMapRowActionProps {
  children: React.ReactNode;
  onlyShowActionOnHover?: boolean;
}

const showActionOnHoverStyle = (props: ConfigurationMapRowActionProps) => {
  if (props.onlyShowActionOnHover) {
    return css`
      .${rowActionStaticClassname} {
        ${visuallyHidden};
      }

      &:hover .${rowActionStaticClassname} {
        ${undoVisuallyHidden};
      }
    `;
  }
};

export default styled("div")`
  ${configurationMapRow};
  ${showActionOnHoverStyle};
  ${border("bottom")};
  ${flex()};
  ${padding("vert", "xs")};
`;
