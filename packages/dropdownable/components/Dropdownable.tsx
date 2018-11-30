import React from "react";
import styled, { css } from "react-emotion";

import Overlay from "../../shared/components/Overlay";
import DropdownContents from "./DropdownContents";
import resizeEventManager from "../../utilities/resizeEventManager";

export enum Direction {
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
  TopLeft = "top-left",
  TopRight = "top-right"
}

const DEFAULT_DIRECTION_PREFERENCES = [
  Direction.BottomLeft,
  Direction.BottomRight,
  Direction.TopRight,
  Direction.TopLeft
];

export interface DropdownableProps {
  open: boolean;
  dropdown: React.ReactNode;
  preferredDirections?: Direction[];
  matchWidth?: boolean;
  onClose?: () => void;
}

interface PositionCoord {
  top: number;
  left: number;
}

interface State {
  direction: Direction;
  position: PositionCoord;
}

const METHODS_TO_BIND = [
  "getDropdown",
  "setPosition",
  "setPositionFromCurrentProps",
  "calculateBestDirection",
  "dropdownStyles",
  "positionForDirection",
  "childBounds",
  "windowDimensions",
  "dropdownDimensions"
];

class Dropdownable extends React.Component<DropdownableProps, State> {
  public static defaultProps: Partial<DropdownableProps> = {
    preferredDirections: DEFAULT_DIRECTION_PREFERENCES,
    matchWidth: false
  };

  private child = React.createRef<HTMLDivElement>();
  private dropdown = React.createRef<HTMLDivElement>();

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
    if (this.props.open !== nextProps.open) {
      this.setPosition(nextProps);
    }
  }

  render() {
    const Container = styled("div")`
      position: relative;
      display: inline-block;
    `;

    return (
      <Container>
        <div ref={this.child}>{this.props.children}</div>
        {this.getOverlay()}
      </Container>
    );
  }

  getOverlay() {
    const { position } = this.state;
    const { open } = this.props;

    const overlayStyle = css({
      top: `${position.top}px`,
      left: `${position.left}px`,
      position: "absolute",
      transform: `scale(${open ? 1 : 0})`,
      opacity: open ? 1 : 0
    });

    return <Overlay className={overlayStyle}>{this.getDropdown()}</Overlay>;
  }

  getDropdown() {
    const { open, dropdown, onClose } = this.props;

    return (
      <div ref={this.dropdown} style={this.dropdownStyles()}>
        <DropdownContents open={open} onClose={onClose}>
          {dropdown}
        </DropdownContents>
      </div>
    );
  }

  setPositionFromCurrentProps() {
    this.setPosition(this.props);
  }

  setPosition(props: DropdownableProps) {
    const dropdownDimensions = this.dropdownDimensions();
    const windowDimensions = this.windowDimensions();
    const childBounds = this.childBounds();
    const direction = this.calculateBestDirection(
      props.preferredDirections,
      childBounds,
      dropdownDimensions,
      windowDimensions
    );

    this.setState({
      direction,
      position: this.positionForDirection(direction, childBounds)
    });
  }

  calculateBestDirection(
    preferredDirections,
    childBounds,
    dropdownDimensions,
    windowDimensions
  ): Direction {
    // Determine if there is enough space in each direction to fit dropdown
    const possibleDirections = {
      top: dropdownDimensions.height <= childBounds.top,
      right:
        dropdownDimensions.width + childBounds.right <= windowDimensions.width,
      bottom:
        childBounds.bottom + dropdownDimensions.height <=
        windowDimensions.height,
      left:
        childBounds.left + dropdownDimensions.width <= windowDimensions.width
    };

    // Pick the first available preference
    const preferredDirection = preferredDirections.find(direction => {
      const [topOrBottom, leftOrRight] = direction.split("-", 2);
      return possibleDirections[topOrBottom] && possibleDirections[leftOrRight];
    });

    // If nothing fits, fall back to the first preference
    return preferredDirection || preferredDirections[0];
  }

  dropdownStyles() {
    const clientBounds = this.childBounds();
    if (this.props.matchWidth && clientBounds.width > 0) {
      return { width: `${clientBounds.width}px` };
    }
    return {};
  }

  positionForDirection(direction, childBounds): PositionCoord {
    const [topOrBottom, leftOrRight] = direction.split("-", 2);
    return { top: childBounds[topOrBottom], left: childBounds[leftOrRight] };
  }

  childBounds() {
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

  windowDimensions() {
    const body = document.body;
    return { width: body.clientWidth, height: body.clientHeight };
  }

  dropdownDimensions() {
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
