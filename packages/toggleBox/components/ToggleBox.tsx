import * as React from "react";
import { cx } from "@emotion/css";
import { ToggleWrapper } from "../../toggleWrapper";
import { ButtonCard } from "../../card";
import { ToggleWrapperProps } from "../../toggleWrapper/components/ToggleWrapper";
import { toggleBoxWrapper } from "../style";

export interface ToggleBoxProps extends ToggleWrapperProps {
  children: React.ReactNode;
}

const ToggleBox = ({
  children,
  className,
  id,
  disabled = false,
  value,
  ...other
}: ToggleBoxProps) => (
  <ToggleWrapper value={value} disabled={disabled} id={id} {...other}>
    {({ isActive, hasFocus }) => (
      <div className={cx(toggleBoxWrapper, className)}>
        <ButtonCard
          isActive={isActive}
          isInput={true}
          hasFocus={hasFocus}
          disabled={disabled}
        >
          {children}
        </ButtonCard>
      </div>
    )}
  </ToggleWrapper>
);

export default ToggleBox;
