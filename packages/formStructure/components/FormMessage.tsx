import * as React from "react";
import { InfoBoxProps } from "../../infobox/components/InfoBox";
import { InfoBoxInline } from "../../infobox";
import { SpacingBox } from "../../styleUtils/modifiers";

type FormMessageProps = Omit<InfoBoxProps, "message">;

const FormMessage: React.FC<FormMessageProps> = ({ children, ...other }) => (
  <SpacingBox side="bottom" spacingSize="l" data-cy="formMessage">
    <InfoBoxInline message={children} {...other} />
  </SpacingBox>
);

export default FormMessage;
