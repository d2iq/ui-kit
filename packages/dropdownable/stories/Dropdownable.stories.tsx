import * as React from "react";
import { css } from "@emotion/css";
import { StoryFn, Meta } from "@storybook/react";
import styled from "@emotion/styled";

import Dropdownable, { Direction } from "../components/Dropdownable";
import { PrimaryButton, SecondaryButton } from "../../button";
import {
  themeBgPrimary,
  themeBorder
} from "../../design-tokens/build/js/designTokens";

export const DropdownContentContainer = styled.div`
  min-width: 250px;
  border: 1px solid ${themeBorder};
  background-color: ${themeBgPrimary};
  padding: 5px;
`;

export default {
  title: "Utils/Dropdownable",
  component: Dropdownable,
  argTypes: {
    preferredDirections: {
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
      control: {
        type: "select"
      }
    },
    dropdown: {
      control: { disable: true }
    },
    overlayRoot: {
      control: { disable: true }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn = args => {
  const [isShowing, setIsShowing] = React.useState(false);
  const { preferredDirections } = args;
  function toggle(
    event?: React.SyntheticEvent<HTMLElement, Event> | undefined
  ) {
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
        <PrimaryButton onClick={event => toggle(event)}>
          Change dropdown orientation using Controls
        </PrimaryButton>
      </Dropdownable>
    </div>
  );
};

const MultipleTemplate: StoryFn = args => {
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
            Open the dropdown before and after expanding the height
          </PrimaryButton>
        </Dropdownable>
      </div>
      <SecondaryButton onClick={toggleExpand}>
        {expanded ? "Collapse" : "Expand"}
      </SecondaryButton>
    </div>
  );
};

export const Default = {
  render: Template
};
export const WithMultipleDirectionPreferences = {
  render: MultipleTemplate
};
