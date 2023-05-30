import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import { Toaster, Toast } from "..";
import { fontSizes } from "../../shared/styles/typography";
import { purple } from "../../design-tokens/build/js/designTokens";
import { ToastProps } from "../components/Toast";
import { toasterAppearance } from "../../storybookHelpers/controlConstants";

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
  component: Toast,
  subcomponents: { Toaster },
  argTypes: {
    appearance: {
      control: { type: "select" },
      options: toasterAppearance
    }
  }
} as Meta<typeof Toast>;

const Template: StoryFn<ToastProps> = args => (
  <Toaster>
    <Toast {...args} title={toastTitle} key={0} id="default" />
  </Toaster>
);

export const Default = {
  render: Template,
  args: { appearance: "default" }
};

export const Description = {
  render: args => (
    <Toaster>
      <Toast
        {...args}
        title={toastTitle}
        description="And this is a short description to provide more info about the message"
        key={0}
        id="description"
      />
    </Toaster>
  ),

  args: { appearance: "default" }
};

export const MultiToast = {
  render: args => (
    <Toaster>
      <Toast {...args} title={toastTitle} key={0} id="default" />
      <Toast {...args} title={toastTitle} key={1} autodismiss id="danger" />
    </Toaster>
  ),

  args: { appearance: "default" }
};

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

AutoDismiss.argTypes = {
  appearance: { control: { disable: true } }
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

CustomDismissTimeAutoDismiss.argTypes = {
  appearance: { control: { disable: true } }
};

export const WithDismissCallback = {
  render: () => (
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
  ),

  argTypes: {
    appearance: { control: { disable: true } }
  }
};

export const With1Action = {
  render: () => (
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
  ),

  argTypes: {
    appearance: { control: { disable: true } }
  }
};

export const With2Actions = {
  render: () => (
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
  ),

  argTypes: {
    appearance: { control: { disable: true } }
  }
};
