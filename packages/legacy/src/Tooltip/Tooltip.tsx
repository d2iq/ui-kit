// original: https://github.com/mesosphere/reactjs-components/tree/master/src/Tooltip

import classnames from "classnames";
import React from "react";
import Overlay from "../../../shared/components/Overlay";

import DOMUtil from "../Util/DOMUtil";
import { tooltip, tooltipWrapper } from "./style";

const ARROW_SIZE = 7;

interface TooltipProps {
  anchor?: string;
  children: React.ReactNode;
  className?: string;
  content: React.ReactNode;
  elementTag?: string;
  interactive?: boolean;
  maxWidth?: number | string;
  position?: string;
  stayOpen?: boolean;
  suppress?: boolean;
  width?: number;
  wrapperClassName?: string;
  wrapText?: boolean;
  contentClassName?: string;
}

const METHODS_TO_BIND = [
  "dismissTooltip",
  "getIdealLocation",
  "handleMouseEnter",
  "handleMouseLeave",
  "handleTooltipMouseEnter",
  "handleTooltipMouseLeave",
  "triggerClose"
];

export class Tooltip extends React.Component<TooltipProps, any> {
  public static defaultProps: Partial<TooltipProps> = {
    anchor: "center",
    className: `${tooltip} tooltip`,
    contentClassName: "tooltip-content",
    elementTag: "div",
    position: "top",
    wrapperClassName: `${tooltipWrapper} tooltip-wrapper text-align-center`
  };
  private readonly tooltipNode = React.createRef<any>();
  private readonly triggerNode = React.createRef<any>();

  constructor(props) {
    super(props);

    this.state = { isOpen: false, wasTriggeredClose: false };

    METHODS_TO_BIND.forEach(method => {
      this[method] = this[method].bind(this);
    });

    this.tooltipNode = React.createRef();
    this.triggerNode = React.createRef();
  }

  componentWillUnmount() {
    this.removeScrollListener();
  }

  handleMouseEnter(options) {
    if (this.props.suppress && !options.forceOpen) {
      return;
    }

    const { anchor, position, coordinates } = this.getIdealLocation(
      this.props.anchor,
      this.props.position
    );

    this.setState({
      anchor,
      isOpen: true,
      position,
      coordinates,
      wasTriggeredClose: false
    });
    this.addScrollListener();
  }

  handleMouseLeave() {
    this.dismissTooltip();
  }

  handleTooltipMouseEnter() {
    if (this.props.interactive && !this.state.wasTriggeredClose) {
      this.setState({ isOpen: true });
      this.addScrollListener();
    }
  }

  handleTooltipMouseLeave() {
    this.dismissTooltip();
  }

  addScrollListener() {
    window.addEventListener("scroll", this.dismissTooltip, true);
  }

  dismissTooltip(options?: any) {
    if ((!this.props.stayOpen || options.forceClose) && this.state.isOpen) {
      this.setState({ isOpen: false });
      this.removeScrollListener();
    }
  }

  getAnchor(isVertical, anchor, clearance, tooltipWidth, tooltipHeight) {
    // Calculate the ideal anchor.
    if (isVertical) {
      return this.transformAnchor(
        anchor,
        clearance.left,
        clearance.right,
        tooltipWidth,
        clearance.boundingRect.width
      );
    }

    return this.transformAnchor(
      anchor,
      clearance.top,
      clearance.bottom,
      tooltipHeight,
      clearance.boundingRect.height
    );
  }

  getCoordinates(position, clearance, tooltipWidth, tooltipHeight) {
    // Calculate the coordinates of the tooltip content.
    if (position === "top") {
      return {
        left: clearance.boundingRect.left + clearance.boundingRect.width / 2,
        top: clearance.boundingRect.top - tooltipHeight + ARROW_SIZE
      };
    }
    if (position === "right") {
      return {
        left: clearance.boundingRect.right,
        top: clearance.boundingRect.top + clearance.boundingRect.height / 2
      };
    }
    if (position === "bottom") {
      return {
        left: clearance.boundingRect.left + clearance.boundingRect.width / 2,
        top: clearance.boundingRect.bottom
      };
    }

    return {
      left: clearance.boundingRect.left - tooltipWidth + ARROW_SIZE,
      top: clearance.boundingRect.top + clearance.boundingRect.height / 2
    };
  }

  isVertical(position) {
    return position !== "left" && position !== "right";
  }

  getPosition(position, clearance, tooltipWidth, tooltipHeight) {
    // Change the position if the tooltip will be rendered off the screen.
    if (position === "left" && clearance.left < tooltipWidth) {
      position = "right";
    } else if (position === "right" && clearance.right < tooltipWidth) {
      position = "left";
    }

    if (position === "top" && clearance.top < tooltipHeight) {
      position = "bottom";
    } else if (position === "bottom" && clearance.bottom < tooltipHeight) {
      position = "top";
    }

    return position;
  }

  getIdealLocation(anchor, position) {
    if (
      !this.triggerNode ||
      !this.triggerNode.current ||
      !this.tooltipNode ||
      !this.tooltipNode.current
    ) {
      return {
        anchor: "center",
        position: "top",
        coordinates: { left: 0, top: 0 }
      };
    }

    const isVertical = this.isVertical(position);
    const clearance = DOMUtil.getNodeClearance(this.triggerNode.current);
    const tooltipRect = this.tooltipNode.current.getBoundingClientRect();
    const tooltipHeight = tooltipRect.height + ARROW_SIZE;
    const tooltipWidth = tooltipRect.width + ARROW_SIZE;

    anchor = this.getAnchor(
      isVertical,
      anchor,
      clearance,
      tooltipWidth,
      tooltipHeight
    );
    position = this.getPosition(
      position,
      clearance,
      tooltipWidth,
      tooltipHeight
    );

    const coordinates = this.getCoordinates(
      position,
      clearance,
      tooltipWidth,
      tooltipHeight
    );

    return { anchor, position, coordinates };
  }

  removeScrollListener() {
    window.removeEventListener("scroll", this.dismissTooltip, true);
  }

  triggerClose() {
    this.setState({ wasTriggeredClose: true });
    this.dismissTooltip({ forceClose: true });
  }

  triggerOpen() {
    this.handleMouseEnter({ forceOpen: true });
  }

  transformAnchor(
    anchor,
    clearanceStart,
    clearanceEnd,
    tooltipDimension,
    triggerDimension
  ) {
    // Change the provided anchor based on the clearance available.
    if (anchor === "start" && clearanceEnd < tooltipDimension) {
      return "end";
    }

    if (anchor === "end" && clearanceStart < tooltipDimension) {
      return "start";
    }

    if (anchor === "center") {
      const tooltipOverflow = (tooltipDimension - triggerDimension) / 2;

      if (clearanceStart < tooltipOverflow) {
        return "start";
      }

      if (clearanceEnd < tooltipOverflow) {
        return "end";
      }
    }

    return anchor;
  }

  render() {
    const {
      anchor,
      children,
      className,
      content,
      elementTag,
      interactive,
      maxWidth,
      position,
      stayOpen,
      suppress,
      width,
      wrapperClassName,
      wrapText,
      contentClassName,
      ...elementProps
    } = this.props;
    let tooltipStyle: any = {};

    // Get the anchor and position from state if possible. If not, get it from
    // the props.
    const anchorValue = this.state.anchor || anchor;
    const positionValue = this.state.position || position;

    const tooltipClasses = classnames(
      className,
      `anchor-${anchorValue}`,
      `position-${positionValue}`,
      {
        "is-interactive": interactive,
        "is-open": this.state.isOpen,
        "no-wrap": !wrapText
      }
    );
    const ElementTag: any = elementTag;

    if (this.state.coordinates) {
      tooltipStyle = {
        left: this.state.coordinates.left,
        top: this.state.coordinates.top
      };
    }

    if (width) {
      tooltipStyle.width = width;
    }

    if (maxWidth) {
      tooltipStyle.maxWidth = maxWidth;
    }

    return (
      <ElementTag
        className={wrapperClassName}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...elementProps}
        ref={this.triggerNode}
      >
        {children}
        <Overlay>
          <div
            className={tooltipClasses}
            ref={this.tooltipNode}
            style={tooltipStyle}
            onMouseEnter={this.handleTooltipMouseEnter}
            onMouseLeave={this.handleTooltipMouseLeave}
          >
            <div className={contentClassName}>{content}</div>
          </div>
        </Overlay>
      </ElementTag>
    );
  }
}
