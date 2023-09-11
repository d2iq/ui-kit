import * as React from "react";
import copy from "copy-to-clipboard";
import { Tooltip } from "../../tooltip";
import { Box } from "../../styleUtils/modifiers";

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

  /**
   * Content to show
   */

  tooltipContent?: React.ReactNode;
  /**
   * Custom ID used for tooltip's id and aria attributes
   */
  tooltipId?: string;
}

interface ClickToCopyProps extends ClickToCopyBaseProps {
  /**
   * Render props to display content and trigger copy using onClick prop
   */
  children: (props: ChildProps) => JSX.Element;
}

/**
 * Consumers of this component should provide a child render prop function
 * that takes a function parameter and returns a component that executes that function using
 * a trigger element such as a button with an onClick handler.
 */
const ClickToCopy = ({
  textToCopy,
  onCopy,
  children,
  tooltipId,
  tooltipContent = "Copied to clipboard"
}: ClickToCopyProps) => {
  const generatedTooltipId = `copyTooltip-${React.useId()}`;
  const [isTooltipShown, setIsTooltipShown] = React.useState<boolean>(false);
  const onClick = () => {
    copy(textToCopy);
    if (onCopy && typeof onCopy === "function") {
      onCopy();
    }
    setIsTooltipShown(true);
    setTimeout(() => {
      setIsTooltipShown(false);
    }, 2000);
  };

  return (
    <Box display="inline-block">
      <Tooltip
        id={tooltipId || generatedTooltipId}
        trigger={children({ onClick })}
        suppress={true}
        isOpen={isTooltipShown}
      >
        {tooltipContent}
      </Tooltip>
    </Box>
  );
};

export default ClickToCopy;
