import React, { ReactNode } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import Dropdownable, { Direction } from "../../components/Dropdownable";
import { PrimaryButton } from "../../../button";
import {
  themeBgPrimary,
  themeBorder
} from "../../../design-tokens/build/js/designTokens";

export const DropdownContentContainer = styled.div`
  min-width: 250px;
  border: 1px solid ${themeBorder};
  background-color: ${themeBgPrimary};
  padding: 5px;
`;

const DropdownStory = ({
  children,
  preferredDirections
}: {
  children: ReactNode;
  preferredDirections?: Direction | Direction[];
}) => {
  const [isShowing, setIsShowing] = React.useState(false);

  function toggle(event?: React.SyntheticEvent<HTMLElement, Event> | undefined) {
    event?.preventDefault();
    setIsShowing(!isShowing);
    event?.stopPropagation();
  }

  const containerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  `;

  return (
    <div className={containerStyle}>
      <Dropdownable
        isOpen={isShowing}
        onClose={toggle}
        preferredDirections={preferredDirections}
        dropdown={
          <DropdownContentContainer>
            <p>Positioned relative to children.</p>
            <p>Click outside to dismiss.</p>
          </DropdownContentContainer>
        }
      >
        <PrimaryButton onClick={event=>toggle(event)}>{children}</PrimaryButton>
      </Dropdownable>
    </div>
  );
};

export default DropdownStory;
