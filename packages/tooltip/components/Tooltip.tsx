import * as React from "react";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";
import TooltipContent from "./TooltipContent";

export interface BaseTooltipProps {
  children: React.ReactNode | string;
  id: string;
  maxWidth?: number;
  minWidth?: number;
}
export interface TooltipProps extends BaseTooltipProps {
  ariaLabel?: string;
  preferredDirections?: Direction[];
  open?: boolean;
  suppress?: boolean;
  trigger: React.ReactNode;
  onClose?: () => void;
}

export interface TooltipState {
  open: boolean;
}

class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open || false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleDropdownableClose = this.handleDropdownableClose.bind(this);
  }

  public render() {
    const {
      ariaLabel,
      children,
      id,
      maxWidth,
      minWidth,
      preferredDirections,
      trigger
    } = this.props;

    return (
      /* tslint:disable:react-a11y-event-has-role */
      /* disabled because there is no appropriate role */
      <span
        aria-label={ariaLabel}
        aria-describedby={id}
        onMouseOver={this.handleOpen}
        onMouseLeave={this.handleClose}
        onFocus={this.handleOpen}
        onBlur={this.handleClose}
        tabIndex={0}
        data-cy="tooltip"
      >
        <Dropdownable
          open={this.state.open}
          onClose={this.handleDropdownableClose}
          dropdown={
            <TooltipContent
              id={id}
              open={this.state.open}
              minWidth={minWidth}
              maxWidth={maxWidth}
            >
              {children}
            </TooltipContent>
          }
          preferredDirections={
            preferredDirections || [Direction.TopCenter, Direction.BottomCenter]
          }
        >
          {trigger}
        </Dropdownable>
      </span>
      /* tslint:enable:react-a11y-event-has-role */
    );
  }

  private handleDropdownableClose() {
    // No need for inner component to close using "on click outside" since
    // the parent is handling onMouseLeave already
  }

  private handleOpen() {
    if (this.props.suppress) {
      return;
    }
    this.setState({ open: true });
  }

  private handleClose() {
    if (this.props.suppress) {
      return;
    }

    this.setState({ open: false }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }
}

export default Tooltip;
