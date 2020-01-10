import copy from "copy-to-clipboard";

interface ChildProps {
  onClick: () => void;
}

export interface ClickToCopyBaseProps {
  /**
   * This is what will end up on the user's clipboard
   */
  textToCopy: string;

  /**
   * Function to execute after text has been copied
   */
  onCopy?: () => void;
}

interface ClickToCopyProps extends ClickToCopyBaseProps {
  /**
   * Render prop to display content and trigger copy using onClick prop
   */
  children: (props: ChildProps) => JSX.Element;
}

/**
 * Consumers of this component should provide a child render prop function
 * that takes a function parameter and returns a component that executes that function using
 * a trigger element such as a button with an onClick handler.
 */
const ClickToCopy = ({ textToCopy, onCopy, children }: ClickToCopyProps) => {
  const onClick = () => {
    copy(textToCopy);
    if (onCopy && typeof onCopy === "function") {
      onCopy();
    }
  };

  return children({ onClick });
};

export default ClickToCopy;
