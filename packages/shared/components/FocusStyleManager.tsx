import * as React from "react";

import { InteractionModeEngine } from "../../utilities/interactionMode";

interface FocusStyleManagerProps {
  focusEnabledClass: string;
  children: React.ReactElement;
}

const FocusStyleManager = ({
  focusEnabledClass,
  children
}: FocusStyleManagerProps) => {
  const focusWrapperRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (focusWrapperRef.current) {
      const focusEngine = new InteractionModeEngine(
        focusWrapperRef.current as Element,
        focusEnabledClass || "focus-enabled",
        document.documentElement
      );
      focusEngine.start();
    }
  }, [focusWrapperRef]);

  return React.cloneElement(React.Children.only(children), {
    ref: focusWrapperRef
  });
};

export default React.memo(FocusStyleManager);
