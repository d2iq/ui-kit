import * as React from "react";
import { cx } from "emotion";
import {
  toast,
  toastActions,
  toastDesc,
  toastTitle,
  toastDismiss
} from "../style";
import {
  darkMode,
  display,
  flex,
  flexItem,
  margin,
  padding
} from "../../shared/styles/styleUtils";
import Clickable from "../../clickable/components/clickable";

export type ToastId = React.ReactText | undefined;

export interface ToastProps {
  title: React.ReactElement<HTMLElement> | string;
  description?: React.ReactElement<HTMLElement> | string;
  id: ToastId;
  appearance?: "default" | "success" | "warning" | "danger";
  autodismiss?: boolean;
  onDismiss?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  dismissToast?: (dismissedToastId: ToastId) => void;
  primaryAction?: React.ReactElement<HTMLElement>;
  secondaryAction?: React.ReactElement<HTMLElement>;
}

// TODO: once we have an icon library, use that instead
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path
      d="M8 9.237L4.119 13.12 2.88 11.88 6.763 8 2.88 4.119 4.12 2.88 8 6.763l3.881-3.882L13.12 4.12 9.237 8l3.882 3.881-1.238 1.238L8 9.237z"
      fillRule="nonzero"
    />
  </svg>
);

class Toast extends React.PureComponent<ToastProps, {}> {
  public static defaultProps: Partial<ToastProps> = {
    appearance: "default",
    autodismiss: false
  };

  constructor(props) {
    super(props);

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  public render() {
    const {
      title,
      description,
      appearance,
      primaryAction,
      secondaryAction
    } = this.props;
    const isUrgentMessage = appearance === "danger" || appearance === "warning";

    return (
      <div
        className={cx(
          toast,
          darkMode,
          margin("bottom", "xxs"),
          padding("top", "xs"),
          padding("right", "xs"),
          padding("left", "xs"),
          display("grid")
        )}
        role={isUrgentMessage ? "alert" : "log"}
        aria-relevant="all"
        aria-atomic="true"
      >
        <div
          className={cx(
            toastTitle,
            flex({ align: "center" }),
            padding("bottom", "xs")
          )}
        >
          {/* TODO: when we do the variants, an icon will always appear
              based on appearance prop, and "default" isn't one of them */}
          {appearance !== "default" && (
            <div className={flexItem("shrink")}>
              <span>☃</span>
            </div>
          )}
          <div className={flexItem("grow")}>{title}</div>
        </div>
        {description && (
          <div className={cx(toastDesc, padding("bottom", "xs"))}>
            {description}
          </div>
        )}
        {(primaryAction || secondaryAction) && (
          <div
            className={cx(
              toastActions,
              flex({ direction: "row-reverse" }),
              padding("bottom", "xs")
            )}
          >
            {primaryAction && (
              <span className={padding("left")}>{primaryAction}</span>
            )}
            {secondaryAction && <span>{secondaryAction}</span>}
          </div>
        )}
        <Clickable tabIndex={0} action={this.handleDismiss}>
          <span className={toastDismiss}>
            <CloseIcon />
          </span>
        </Clickable>
      </div>
    );
  }

  private handleDismiss(e) {
    const { dismissToast, onDismiss, id } = this.props;
    if (dismissToast) {
      dismissToast(id);
    }
    if (onDismiss) {
      onDismiss(e);
    }
  }
}

export default Toast;
