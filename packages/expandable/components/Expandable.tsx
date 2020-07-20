import * as React from "react";
import { cx } from "emotion";
import Toggle from "react-toggled";
import { display } from "../../shared/styles/styleUtils";
import { toggler } from "../style";
import { ResetButton } from "../../button";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import { Flex, FlexItem } from "../../styleUtils/layout";

export interface ExpandableProps {
  children: React.ReactElement<HTMLElement> | string;
  controlledIsOpen?: boolean;
  isOpen?: boolean;
  label: React.ReactElement<HTMLElement> | string;
  labelClassName?: string;
  onChange?: (open: boolean) => void;
}

class Expandable extends React.PureComponent<ExpandableProps, {}> {
  public render() {
    const {
      labelClassName,
      children,
      label,
      isOpen,
      controlledIsOpen,
      onChange
    } = this.props;

    return (
      <Toggle
        defaultOn={Boolean(isOpen)}
        on={controlledIsOpen}
        onToggle={onChange}
      >
        {({ on, getTogglerProps }) => (
          <div>
            <ResetButton
              {...getTogglerProps({
                className: cx(labelClassName, toggler)
              })}
            >
              <Flex align="center">
                <FlexItem flex="shrink">
                  <Icon
                    shape={
                      on ? SystemIcons.TriangleDown : SystemIcons.TriangleRight
                    }
                    size={iconSizeXs}
                  />
                </FlexItem>
                <FlexItem>{label}</FlexItem>
              </Flex>
            </ResetButton>
            {/* TODO: investigate whether display: none is a11y-friendly in this situation */}
            <div className={cx({ [display("none")]: !on })}>{children}</div>
          </div>
        )}
      </Toggle>
    );
  }
}

export default Expandable;
