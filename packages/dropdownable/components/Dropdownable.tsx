import React from "react";

import Overlay from "../../shared/components/Overlay";
import DropdownContents from "./DropdownContents";
import resizeEventManager from "../../utilities/resizeEventManager";
import {
  getNonPortalledDropdownStyle,
  getPortalledDropdownStyle,
  dropdownableContainer
} from "../style";
import { cx } from "emotion";

export enum Direction {
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  TopLeft = "top-left",
  TopRight = "top-right",
  TopCenter = "top-center"
}

const DEFAULT_DIRECTION_PREFERENCES = [
  Direction.BottomLeft,
  Direction.BottomRight,
  Direction.TopRight,
  Direction.TopLeft
];
export interface DropdownableProps {
  open: boolean;
  dropdown: React.ReactElement<any>;
  preferredDirections?: Direction[];
  onClose?: () => void;
  overlayRoot?: HTMLElement;
  disablePortal?: boolean;
}

export interface PositionCoord {
  top: number;
  left: number;
}

interface State {
  direction: Direction;
  position: PositionCoord;
}

interface Dimension {
  width: number;
  height: number;
}

const METHODS_TO_BIND = [
  "getDropdown",
  "setPosition",
  "setPositionFromCurrentProps",
  "calculateBestDirection",
  "positionForDirection",
  "childBounds",
  "windowDimensions",
  "dropdownDimensions"
];

class Dropdownable extends React.Component<DropdownableProps, State> {
  public static defaultProps: Partial<DropdownableProps> = {
    preferredDirections: DEFAULT_DIRECTION_PREFERENCES
  };

  private readonly child = React.createRef<HTMLDivElement>();
  private readonly dropdown = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props);

    this.state = {
      direction: Direction.BottomLeft,
      position: {
        top: 0,
        left: 0
      }
    };

    METHODS_TO_BIND.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount() {
    resizeEventManager.add(this.setPositionFromCurrentProps);
    this.setPositionFromCurrentProps();
  }

  componentWillUnmount() {
    resizeEventManager.remove(this.setPositionFromCurrentProps);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setPosition(nextProps);
    }
  }

  render() {
    return (
      <div className={dropdownableContainer}>
        <div ref={this.child}>{this.props.children}</div>
        {this.getOverlay()}
      </div>
    );
  }

  getOverlay() {
    const { position } = this.state;
    const { open, overlayRoot, disablePortal } = this.props;

    return !disablePortal ? (
      <Overlay
        overlayRoot={overlayRoot}
        className={getPortalledDropdownStyle(position, open)}
      >
        {this.getDropdown()}
      </Overlay>
    ) : (
      this.getDropdown()
    );
  }

  getDropdown() {
    const { direction } = this.state;
    const { open, dropdown, onClose, disablePortal } = this.props;

    return (
      <div
        ref={this.dropdown}
        className={cx({
          [getNonPortalledDropdownStyle(direction, open)]: disablePortal
        })}
      >
        <DropdownContents open={open} onClose={onClose}>
          {React.cloneElement(dropdown, {
            direction: this.state.direction
          })}
        </DropdownContents>
      </div>
    );
  }

  setPositionFromCurrentProps() {
    if (!this.props.open) {
      return;
    }
    this.setPosition(this.props);
  }

  setPosition(props: DropdownableProps) {
    const dropdownDimensions: Dimension = this.dropdownDimensions();
    const windowDimensions: Dimension = this.windowDimensions();
    const childBounds: ClientRect = this.childBounds();
    const direction: Direction = this.calculateBestDirection(
      props.preferredDirections,
      childBounds,
      dropdownDimensions,
      windowDimensions
    );

    this.setState({
      direction,
      position: this.positionForDirection(
        direction,
        childBounds,
        dropdownDimensions
      )
    });
  }

  calculateBestDirection(
    preferredDirections,
    childBounds,
    dropdownDimensions,
    windowDimensions
  ): Direction {
    // Determine if there is enough space in each direction to fit dropdown
    const triggerCenter = childBounds.width / 2 + childBounds.left;
    const possibleVertDirections = {
      top: dropdownDimensions.height <= childBounds.top,
      bottom:
        childBounds.bottom + dropdownDimensions.height <=
        windowDimensions.height
    };
    const possibleHorizDirections = {
      left:
        dropdownDimensions.width + childBounds.left <= windowDimensions.width,
      right: childBounds.right - dropdownDimensions.width >= 0,
      center:
        triggerCenter - dropdownDimensions.width / 2 > 0 &&
        triggerCenter + dropdownDimensions.width / 2 < windowDimensions.width
    };

    // Pick the first available preference
    const preferredDirection = preferredDirections.find(direction => {
      const topOrBottom = direction.split("-", 2)[0];
      const leftOrRight = direction.split("-", 2)[1];
      return (
        possibleVertDirections[topOrBottom] &&
        possibleHorizDirections[leftOrRight]
      );
    });

    // If nothing fits, fall back to the first preference
    return preferredDirection || preferredDirections[0];
  }

  positionForDirection(
    direction: Direction,
    childBounds,
    dropdownDimensions
  ): PositionCoord {
    const isTop: boolean =
      direction === Direction.TopLeft ||
      direction === Direction.TopRight ||
      direction === Direction.TopCenter;
    const isLeft: boolean =
      direction === Direction.TopLeft || direction === Direction.BottomLeft;
    const isCenter: boolean =
      direction === Direction.TopCenter || direction === Direction.BottomCenter;

    const getHorizAlignment = () => {
      if (isCenter) {
        return (
          childBounds.x +
          childBounds.width / 2 -
          dropdownDimensions.width / 2 +
          window.scrollX
        );
      }
      if (isLeft) {
        return childBounds.left + window.scrollX;
      }
      return (
        childBounds.left -
        dropdownDimensions.width +
        childBounds.width +
        window.scrollX
      );
    };

    return {
      top: isTop
        ? childBounds.top - dropdownDimensions.height + window.scrollY
        : childBounds.top + childBounds.height + window.scrollY,
      left: getHorizAlignment()
    };
  }

  childBounds(): ClientRect {
    const child = this.child.current;

    if (child) {
      return child.getBoundingClientRect();
    }

    // child.current should not be null due to React lifecycle but
    // is not guarateed by the type.
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
  }

  windowDimensions(): Dimension {
    const body = document.body;
    return { width: body.clientWidth, height: body.clientHeight };
  }

  dropdownDimensions(): Dimension {
    const dropdown = this.dropdown.current!;

    if (dropdown) {
      return {
        width: dropdown.clientWidth,
        height: dropdown.clientHeight
      };
    }

    // dropdown.current should not be null due to React lifecycle but
    // is not guarateed by the type.
    return {
      width: 0,
      height: 0
    };
  }
}

export default Dropdownable;
