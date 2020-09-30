import * as React from "react";

import { InteractionModeEngine } from "../../utilities/interactionMode";

class FocusStyleManager extends React.PureComponent<{
  focusEnabledClass: string;
  children: React.ReactElement;
}> {
  focusWrapperRef: Element | undefined;

  public componentDidMount() {
    const focusEngine = new InteractionModeEngine(
      this.focusWrapperRef as Element,
      this.props.focusEnabledClass || "focus-enabled",
      document.documentElement
    );
    focusEngine.start();
  }

  public render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      ref: this.setRef
    });
  }

  private readonly setRef = ref => {
    this.focusWrapperRef = ref;
  };
}

export default FocusStyleManager;
