import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Toaster, Toast } from "..";
import { ToastProps } from "../components/Toast";
import { fontSizes } from "../../shared/styles/typography";
import { purple } from "../../design-tokens/build/js/designTokens";

let addedToastId = 1;
const toastTitle = "I have a message for you";
const fakeButtonStyles = {
  ["-webkit-appearance"]: "none",
  ["-moz-appearance"]: "none",
  background: "transparent",
  border: "none",
  color: purple,
  cursor: "pointer",
  fontSize: fontSizes.s,
  padding: 0
};

export default {
  title: "Feedback/Toaster",
  component: Toaster
};

export const Default = () => (
  <Toaster>{[<Toast title={toastTitle} key={0} id="default" />]}</Toaster>
);

export const Danger = () => (
  <Toaster>
    {[<Toast title={toastTitle} key={0} id="danger" appearance="danger" />]}
  </Toaster>
);

export const Success = () => (
  <Toaster>
    {[<Toast title={toastTitle} key={0} id="success" appearance="success" />]}
  </Toaster>
);

export const Warning = () => (
  <Toaster>
    {[<Toast title={toastTitle} key={0} id="warning" appearance="warning" />]}
  </Toaster>
);

export const Description = () => (
  <Toaster>
    {[
      <Toast
        title={toastTitle}
        description="And this is a short description to provide more info about the message"
        key={0}
        id="description"
      />
    ]}
  </Toaster>
);

export const MultiToast = () => (
  <Toaster>
    <Toast title={toastTitle} key={0} id="default" />
    <Toast
      title={toastTitle}
      key={1}
      autodismiss
      id="danger"
      appearance="danger"
    />
  </Toaster>
);

export const AutoDismiss = () => {
  const [toasts, setToasts] = React.useState<number[]>([]);

  const removeToast = (id: number) => {
    setToasts(toasts => toasts.filter(toast => toast !== id));
  };

  const handleToastAdd = () => {
    const newToastId = addedToastId++;
    setToasts(toasts => [...toasts, newToastId]);
  };

  return (
    <div>
      <Toaster>
        {toasts.map(toastId => {
          const handleDismiss = () => {
            removeToast(toastId);
          };
          return (
            <Toast
              autodismiss
              id={`toast-${toastId}`}
              key={toastId}
              title={`New message ${toastId}`}
              onDismiss={handleDismiss}
            />
          );
        })}
      </Toaster>
      <button onClick={handleToastAdd}>Make me toast</button>
    </div>
  );
};

export const CustomDismissTimeAutoDismiss = () => {
  const [toasts, setToasts] = React.useState<number[]>([]);

  const removeToast = (id: number) => {
    setToasts(toasts => toasts.filter(toast => toast !== id));
  };

  const handleToastAdd = () => {
    const newToastId = addedToastId++;
    setToasts(toasts => [...toasts, newToastId]);
  };

  return (
    <div>
      <Toaster dismissTime={5000}>
        {toasts.map(toastId => {
          const handleDismiss = () => {
            removeToast(toastId);
          };
          return (
            <Toast
              autodismiss
              id={`toast-${toastId}`}
              key={toastId}
              title={`New message ${toastId} disappearing in 5 seconds`}
              onDismiss={handleDismiss}
            />
          );
        })}
      </Toaster>
      <button onClick={handleToastAdd}>Make me toast</button>
    </div>
  );
};

export const WithDismissCallback = () => (
  <Toaster>
    {[
      <Toast
        title={toastTitle}
        key={0}
        onDismiss={action("The toast has been dismissed")}
        id="dismissCallback"
      />
    ]}
  </Toaster>
);

export const With1Action = () => (
  <Toaster>
    {[
      <Toast
        title={toastTitle}
        key={0}
        primaryAction={
          <button
            onClick={action("primary action clicked")}
            style={fakeButtonStyles}
          >
            primaryAction
          </button>
        }
        id="oneAction"
      />
    ]}
  </Toaster>
);

export const With2Actions = () => (
  <Toaster>
    {[
      <Toast
        title={toastTitle}
        key={0}
        primaryAction={
          <button
            onClick={action("primaryAction triggered")}
            style={fakeButtonStyles}
          >
            primaryAction
          </button>
        }
        secondaryAction={
          <button
            onClick={action("secondaryAction triggered")}
            style={fakeButtonStyles}
          >
            secondaryAction
          </button>
        }
        id="twoActions"
      />
    ]}
  </Toaster>
);
