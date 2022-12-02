import * as React from "react";
import { cx } from "@emotion/css";
import { TransitionGroup, Transition } from "react-transition-group";
import { ToastProps } from "./Toast";
import { toaster, preTransitionStyle, transitionStyles } from "../style";
import { margin, marginAt, listReset } from "../../shared/styles/styleUtils";

export const DEFAULT_DELAY_TIME = 3000;
const MARGINAL_DELAY = 1000;
const animationDuration = 300;

type Toast = React.ReactElement<ToastProps>;

interface ToasterProps {
  dismissTime?: number;
  children?: Toast | Toast[];
}

const Toaster = ({
  dismissTime = DEFAULT_DELAY_TIME,
  children
}: ToasterProps) => {
  const timeouts = React.useRef<number[]>([]);

  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const dismissToast = (toastToDismiss: Toast) => {
    if (toastToDismiss && toastToDismiss.props.onDismiss) {
      toastToDismiss.props.onDismiss();
    }
    setToasts(toasts =>
      toasts.filter(toast => toastToDismiss.props.id !== toast.props.id)
    );
  };

  const restartTimeouts = () => {
    toasts.forEach((toast: Toast, index: number) => {
      if (toast.props.autodismiss) {
        timeouts.current.push(
          window.setTimeout(() => {
            dismissToast(toast);
          }, dismissTime + MARGINAL_DELAY * index)
        );
      }
    });
  };

  const clearTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
  };

  React.useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, []);

  React.useEffect(() => {
    setToasts(toasts => {
      const toastChildren = React.Children.toArray(children) as Toast[];
      const childIds = toastChildren.map(toast => toast.props.id);
      const currentIds = toasts.map(toast => toast.props.id);

      if (
        !currentIds.every(e => childIds.includes(e)) ||
        !currentIds.length ||
        childIds.length !== currentIds.length
      ) {
        return toastChildren;
      }

      return toasts;
    });
  }, [children]);

  React.useEffect(() => {
    restartTimeouts();
  }, [toasts]);

  return (
    <div
      className={cx(toaster, margin("all"), marginAt.medium("all", "l"))}
      data-cy="toaster"
    >
      <ol
        onMouseEnter={clearTimeouts}
        onMouseLeave={restartTimeouts}
        aria-live="assertive"
        className={listReset}
        data-cy="toaster-list"
      >
        <TransitionGroup>
          {toasts.map((toast: Toast) => {
            const handleDismiss = () => {
              dismissToast(toast);
            };
            return (
              <Transition
                key={`toastWrapper-${toast.props.id}`}
                timeout={{ enter: 0, exit: animationDuration }}
                mountOnEnter
              >
                {state => (
                  <li
                    className={cx(
                      preTransitionStyle(animationDuration),
                      transitionStyles[state]
                    )}
                  >
                    {React.cloneElement(toast, {
                      dismissToast: handleDismiss
                    })}
                  </li>
                )}
              </Transition>
            );
          })}
        </TransitionGroup>
      </ol>
    </div>
  );
};

export default React.memo(Toaster);
