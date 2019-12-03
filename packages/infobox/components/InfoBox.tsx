import * as React from "react";
import { cx } from "emotion";
import {
  infoBox,
  primaryActionStyle,
  infoBoxActions,
  dismissBtn
} from "../style";
import Clickable from "../../clickable/components/clickable";
import {
  padding,
  textSize,
  display,
  textWeight
} from "../../shared/styles/styleUtils";
import {
  iconSizeXs,
  greyDark
} from "../../design-tokens/build/js/designTokens";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

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
  message: React.ReactNode;
  /**
   * the more prominent action presented to the user
   */
  primaryAction?: React.ReactElement<HTMLElement>;
  /**
   * an alternate action the user could take
   */
  secondaryAction?: React.ReactElement<HTMLElement>;
}

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
    const dataCy = [
      "infoBox",
      ...(appearance && appearance !== "default"
        ? [`infoBox.${appearance}`]
        : [])
    ].join(" ");

    return (
      <div
        className={cx(
          infoBox(appearance, hasActions),
          padding("all"),
          textSize("s"),
          display("grid"),
          textWeight("medium"),
          className
        )}
        role={isUrgentMessage ? "alert" : "log"}
        aria-live={isUrgentMessage ? "assertive" : "polite"}
        data-cy={dataCy}
      >
        <div>{message}</div>
        {hasActions && (
          <div
            className={cx(infoBoxActions, display("inline-flex"))}
            data-cy="infoBox-actions"
          >
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
            <span className={dismissBtn}>
              <Icon
                shape={SystemIcons.Close}
                size={iconSizeXs}
                color={greyDark}
              />
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
