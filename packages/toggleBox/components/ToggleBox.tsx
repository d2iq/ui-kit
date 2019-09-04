import * as React from "react";
import shortid from "shortid";
import { ToggleWrapper } from "../../toggleWrapper";
import { ButtonCard } from "../../card";
import { ToggleWrapperProps } from "../../toggleWrapper/components/ToggleWrapper";

export interface ToggleBoxProps extends ToggleWrapperProps {
  children: React.ReactNode;
}

const ToggleBox = ({
  children,
  id = shortid.generate(),
  disabled = false,
  ...other
}) => (
  <ToggleWrapper disabled={disabled} id={id} {...other}>
    {({ isActive, hasFocus }) => (
      <ButtonCard
        isActive={isActive}
        isInput={true}
        hasFocus={hasFocus}
        disabled={disabled}
      >
        {children}
      </ButtonCard>
    )}
  </ToggleWrapper>
);

export default ToggleBox;
