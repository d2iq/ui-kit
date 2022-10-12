import React from "react";
import { css } from "@emotion/css";

import Dropdownable, { Direction } from "../../components/Dropdownable";
import { PrimaryButton, SecondaryButton } from "../../../button";
import { DropdownContentContainer } from "./DropdownStory";

const DropdownStoryFit = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const containerStyle = css({
    display: "flex",
    ["align-items"]: "center",
    ["justify-content"]: "flex-end",
    ["min-height"]: expanded ? "400px" : "40px"
  });

  function toggleExpand() {
    setExpanded(!expanded);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen(
    event?: React.SyntheticEvent<HTMLElement, Event> | undefined
  ) {
    event?.preventDefault();
    setIsOpen(true);
    event?.stopPropagation();
  }

  return (
    <div>
      <div className={containerStyle}>
        <Dropdownable
          isOpen={isOpen}
          onClose={handleClose}
          preferredDirections={[Direction.TopRight, Direction.BottomRight]}
          dropdown={
            <DropdownContentContainer>
              <p>I prefer to be positioned on the top</p>
              <p>Click outside to dismiss</p>
              <p>Also try resizing</p>
              <p>Click the other button to make more vertical space</p>
              <p>Click the other button to make more vertical space</p>
              <p>Click the other button to make more vertical space</p>
              <p>Click the other button to make more vertical space</p>
              <p>Click the other button to make more vertical space</p>
            </DropdownContentContainer>
          }
        >
          <PrimaryButton onClick={event => handleOpen(event)}>
            {children}
          </PrimaryButton>
        </Dropdownable>
      </div>
      <SecondaryButton onClick={toggleExpand}>
        {expanded ? "Collapse" : "Expand"}
      </SecondaryButton>
    </div>
  );
};

export default DropdownStoryFit;
