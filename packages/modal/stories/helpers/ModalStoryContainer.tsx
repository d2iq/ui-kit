import * as React from "react";
import PrimaryButton from "../../../button/components/PrimaryButton";

export interface ModalStoryContainerProps {
  children: any;
}

const ModalStoryContainer = ({ children }: ModalStoryContainerProps) => {
  const [isShowing, setIsShowing] = React.useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return (
    <div>
      {children({ isOpen: isShowing, onClose: toggle })}
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={toggle}>Open Modal</PrimaryButton>
      </div>
    </div>
  );
};

export default ModalStoryContainer;
