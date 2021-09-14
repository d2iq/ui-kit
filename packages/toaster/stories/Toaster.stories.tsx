import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Toaster, Toast } from "..";
import { ToastProps } from "../components/Toast";
import { fontSizes } from "../../shared/styles/typography";
import { purple } from "../../design-tokens/build/js/designTokens";

let addedToastId = 0;
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

class ToasterContainer extends React.PureComponent<
  { children: Array<React.ReactElement<ToastProps>> },
  { toasts: Array<React.ReactElement<ToastProps>> }
> {
  constructor(props) {
    super(props);

    this.addToast = this.addToast.bind(this);
    this.removeToast = this.removeToast.bind(this);

    this.state = { toasts: this.props.children };
  }

  addToast(toast: Array<React.ReactElement<ToastProps>>) {
    this.setState({ toasts: this.state.toasts.concat(toast) });
  }

  removeToast(id: string) {
    this.setState({ toasts: this.state.toasts.filter(t => t.props.id !== id) });
  }

  render() {
    const handleToastAdd = () => {
      const newToastId = addedToastId++;
      const toastId = `toast-${newToastId + 1}`;
      const dismissToast = () => this.removeToast(toastId);

      this.addToast([
        <Toast
          autodismiss={true}
          id={toastId}
          key={newToastId + 1}
          title={`New message ${newToastId + 1}`}
          onDismiss={dismissToast}
        />
      ]);
    };

    return (
      <div>
        <Toaster>{this.state.toasts}</Toaster>
        <button onClick={handleToastAdd}>Make me toast</button>
      </div>
    );
  }
}

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

export const AutoDismiss = () => <ToasterContainer>{[]}</ToasterContainer>;

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
