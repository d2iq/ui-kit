import * as React from "react";
import { cx } from "emotion";
import { infoBox, primaryActionStyle, infoBoxActions } from "../style";
import Clickable from "../../clickable/components/clickable";
import { padding, textSize, display } from "../../shared/styles/styleUtils";

export interface InfoBoxProps {
  /**
   * the tone of the message
   */
  appearance?: "danger" | "default" | "info" | "success" | "warning";
  /**
   * additional styles to extend the component
   */
  className?: string;
  /**
   * additional styles to extend the component
   */
  onDismiss?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * the main content of the message
   */
  message: React.ReactElement<HTMLElement> | string;
  /**
   * the more prominent action presented to the user
   */
  primaryAction?: React.ReactElement<HTMLElement>;
  /**
   * an alternate action the user could take
   */
  secondaryAction?: React.ReactElement<HTMLElement>;
}

// TODO: once we have an icon library, use that instead
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path
      d="M8 9.237L4.119 13.12 2.88 11.88 6.763 8 2.88 4.119 4.12 2.88 8 6.763l3.881-3.882L13.12 4.12 9.237 8l3.882 3.881-1.238 1.238L8 9.237z"
      fill-rule="nonzero"
    />
  </svg>
);

export class InfoBox extends React.PureComponent<InfoBoxProps, {}> {
  public static defaultProps: Partial<InfoBoxProps> = {
    appearance: "default"
  };

  constructor(props) {
    super(props);

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  public render() {
    const {
      appearance,
      message,
      primaryAction,
      secondaryAction,
      onDismiss,
      className
    } = this.props;

    const hasActions = primaryAction || secondaryAction;

    const isUrgentMessage = appearance === "danger" || appearance === "warning";

    return (
      <div
        className={cx(
          infoBox(appearance, hasActions),
          padding("all"),
          textSize("small"),
          display("grid"),
          className
        )}
        role={isUrgentMessage ? "alert" : "log"}
        aria-live={isUrgentMessage ? "assertive" : "polite"}
      >
        <div>{message}</div>
        {hasActions && (
          <div className={cx(infoBoxActions, display("inline-flex"))}>
            {primaryAction && (
              <span className={primaryActionStyle}>{primaryAction}</span>
            )}

            {secondaryAction && (
              <span className={padding("right")}>{secondaryAction}</span>
            )}
          </div>
        )}

        {onDismiss && (
          <Clickable action={this.handleDismiss} tabIndex={0}>
            <span>
              <CloseIcon />
            </span>
          </Clickable>
        )}
      </div>
    );
  }

  private handleDismiss(e): void {
    if (!this.props.onDismiss) {
      return;
    }
    this.props.onDismiss(e);
  }
}

export default InfoBox;
