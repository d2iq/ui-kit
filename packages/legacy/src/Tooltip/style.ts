import { css } from "emotion";
import {
  greyDarkLighten2,
  white
} from "../../../design-tokens/build/js/designTokens";

const tooltipBackground = greyDarkLighten2;
const tooltipLinkForeground = white;
const tooltipArrowBorderWidth = "7px";
const tooltipArrowOffset = "8px";
const tooltipAnchorOffset = `${parseInt(tooltipArrowOffset, 10) +
  parseInt(tooltipArrowBorderWidth, 10)}px`;

export const tooltipWrapper = css`
  display: inline-block;
  position: relative;
`;

export const tooltip = css`
  max-width: 600px;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition: opacity 0.3s, visibility 0.3s;
  visibility: hidden;
  z-index: 9999;

  .tooltip-content {
    background: ${tooltipBackground};
    border-radius: 2px;
    color: white;
    font-size: .9rem;
    line-height: 1rem;
    padding: 0.8rem 1rem;
    position: relative;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    transition: translateZ(0);

    &:after {
      border-color: ${tooltipBackground};
      border-style: solid;
      border-width: ${tooltipArrowBorderWidth};
      content: "";
      position: absolute;
    }
  }

  &.no-wrap {
    white-space: nowrap;
  }

  &.is-interactive {
    pointer-events: auto;
  }

  &.is-open {
    opacity: 1;
    visibility: visible;
  }

  &.position-bottom,
  &.position-top {
    &.anchor-center {
    transform: translateX(-50%);

    .tooltip-content {
        &:after {
        left: 50%;
        transform: translateX(-50%);
        }
    }
    }

    &.anchor-start {
    transform: translateX(${tooltipAnchorOffset} * -1);

    .tooltip-content {
        &:after {
        left: ${tooltipArrowOffset};
        }
    }
    }

    &.anchor-end {
    transform: translateX(calc(~"-100% + @${tooltipAnchorOffset}}"));

    .tooltip-content {
        &:after {
        right: ${tooltipArrowOffset};
        }
    }
    }
  }

  &.position-bottom {
    padding-top: ${tooltipArrowBorderWidth};

    .tooltip-content {
    &:after {
        border-left-color: transparent;
        border-right-color: transparent;
        border-top: none;
        bottom: 100%;
    }
    }
  }

  &.position-top {
    padding-bottom: ${tooltipArrowBorderWidth};

    .tooltip-content {
    &:after {
        border-bottom: none;
        border-left-color: transparent;
        border-right-color: transparent;
        top: 100%;
    }
    }
  }

  &.position-left,
  &.position-right {
    &.anchor-center {
    top: 50%;
    transform: translateY(-50%);

    .tooltip-content {
        &:after {
        top: 50%;
        transform: translateY(-50%);
        }
    }
    }

    &.anchor-start {
    transform: translateY(${tooltipAnchorOffset} * -1);

    .tooltip-content {
        &:after {
        top: ${tooltipArrowOffset};
        }
    }
    }

    &.anchor-end {
    transform: translateY(calc(~"-100% + @${tooltipAnchorOffset}}"));

    .tooltip-content {
        &:after {
        bottom: ${tooltipArrowOffset};
        }
    }
    }
  }

  &.position-left {
    padding-right: ${tooltipArrowBorderWidth};

    .tooltip-content {
    &:after {
        border-bottom-color: transparent;
        border-right: none;
        border-top-color: transparent;
        left: 100%;
    }
    }
  }

  &.position-right {
    padding-left: ${tooltipArrowBorderWidth};

    .tooltip-content {
    &:after {
        border-bottom-color: transparent;
        border-left: none;
        border-top-color: transparent;
        right: 100%;
    }
    }
  }

  a {
    color: ${tooltipLinkForeground};
    text-decoration: underline;

    &:active {
    text-decoration: underline;
    }

    &:hover {
    color: ${tooltipLinkForeground};
    }
  }
`;
