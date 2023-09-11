import * as React from "react";
import { cx } from "@emotion/css";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { Badge } from "../../badge";
import { flex, textTruncate, flexItem } from "../../shared/styles/styleUtils";
import {
  badgeInput,
  badgeInputContainer,
  badgeInputContents,
  badgeText
} from "../style";
import { Flex, FlexItem } from "../../styleUtils/layout";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Icon } from "../../icon";
import Clickable from "../../clickable/components/clickable";
import { TextInputWithIconProps } from "./TextInputWithIcon";
import { BadgeAppearance } from "../../badge/components/badge";
import { StateChangeOptions } from "downshift";
import { InputAppearance } from "../../shared/types/inputAppearance";
import {
  getIconEndContent,
  getIconStartContent,
  getInputElement,
  getInputElementProps as getBaseInputElementProps
} from "./utils";
import InputLabel from "../../shared/components/InputLabel";

export interface BadgeDatum {
  value: string;
  label: React.ReactNode;
}

interface TextInputWithBadgesProps extends TextInputWithIconProps {
  badges?: BadgeDatum[];
  onBadgeChange?: (
    currentBadges: BadgeDatum[],
    affectedBadge?: BadgeDatum // the badge to add or delete
  ) => void;
  downshiftReset?: (
    otherStateToSet?: Partial<StateChangeOptions<string>>,
    cb?: () => void
  ) => void;
  badgeAppearance?: BadgeAppearance;
  addBadgeOnBlur?: boolean;
}

export const getStringAsBadgeDatum = (
  badgeLabelString: string
): BadgeDatum => ({
  label: badgeLabelString,
  value: badgeLabelString
});

const TextInputWithBadges = ({
  type = "text",
  appearance = InputAppearance.Standard,
  showInputLabel = true,
  addBadgeOnBlur = true,
  ...props
}: TextInputWithBadgesProps) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [hasFocus, setHasFocus] = React.useState(false);
  const generatedId = `textInput-${React.useId()}`;
  const textInputWithBadgesId = props.id || generatedId;

  const inputOnFocus = e => {
    setHasFocus(true);

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const inputOnBlur = e => {
    setHasFocus(false);

    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const getInputElementProps = () => {
    const baseProps = getBaseInputElementProps(props);
    const { iconStart, iconEnd, ...baseInputProps } =
      baseProps as TextInputWithIconProps;
    baseInputProps.onFocus = inputOnFocus;
    baseInputProps.onBlur = inputOnBlur;

    const {
      badges,
      onBadgeChange,
      downshiftReset,
      addBadgeOnBlur = "true",
      badgeAppearance,
      ...inputProps
    } = baseProps as TextInputWithBadgesProps;
    inputProps.onKeyDown = handleKeyDown;
    inputProps.onKeyUp = handleKeyUp;
    inputProps.onFocus = inputOnFocus;
    inputProps.onBlur = handleBlur;
    inputProps.type = "text";
    inputProps.ref = inputRef;
    return inputProps;
  };

  const getInputAppearance = () => {
    if (props.disabled) {
      return "disabled";
    }
    if (hasFocus) {
      return `${appearance}-focus`;
    }
    return appearance;
  };

  const getInputContent = () => {
    const inputAppearance = getInputAppearance();
    const { hintContent, badgeAppearance = "primary" } = props;

    return (
      <FormFieldWrapper
        id={textInputWithBadgesId}
        errors={props.errors}
        hintContent={hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <>
            <div
              className={cx(
                flex({ wrap: "wrap" }),
                inputContainer,
                badgeInputContainer,
                getInputAppearanceStyle(inputAppearance)
              )}
            >
              {getIconStartContent(props, getInputAppearance())}
              {props.badges &&
                props.badges.map(badge => {
                  return (
                    <span
                      className={badgeInputContents}
                      key={`${badge.value}-badgeWrapper`}
                    >
                      <Badge appearance={badgeAppearance}>
                        <Flex align="center" gutterSize="xxs">
                          <FlexItem>
                            <div className={cx(textTruncate, badgeText)}>
                              {typeof badge.label === "string"
                                ? badge.label.replace(/\s/g, "\u00a0")
                                : badge.label}
                            </div>
                          </FlexItem>
                          <FlexItem flex="shrink">
                            <Clickable action={onBadgeClose.bind(this, badge)}>
                              <span>
                                <Icon shape={SystemIcons.Close} size="xxs" />
                              </span>
                            </Clickable>
                          </FlexItem>
                        </Flex>
                      </Badge>
                    </span>
                  );
                })}
              {getInputElement(
                [badgeInput, badgeInputContents, flexItem("grow")],
                isValid,
                describedByIds,
                props,
                getInputAppearance,
                getInputElementProps
              )}
              {getIconEndContent(props, getInputAppearance())}
            </div>
            {getHintContent}
            {getValidationErrors}
          </>
        )}
      </FormFieldWrapper>
    );
  };

  const handleTagDelete = (tagToDelete: BadgeDatum) => {
    const { onBadgeChange, badges = [] } = props;

    if (onBadgeChange) {
      onBadgeChange(
        badges.filter(badge => badge.value !== tagToDelete.value),
        tagToDelete
      );
    }
  };

  const handleTagAdd = (tagToAdd: BadgeDatum) => {
    const { onBadgeChange, badges = [], downshiftReset } = props;
    const badgeValues = badges.map(badge => badge.value);

    if (downshiftReset) {
      downshiftReset();
    }

    if (
      onBadgeChange &&
      tagToAdd.value.replace(/\s/g, "").length &&
      !badgeValues.includes(tagToAdd.value)
    ) {
      onBadgeChange([...badges, tagToAdd], tagToAdd);
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleKeyDown = e => {
    if (!e.target.value && e.key === "Backspace" && props.badges) {
      handleTagDelete(props.badges[props.badges.length - 1]);
    }

    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTagAdd(getStringAsBadgeDatum(e.target.value));
    }

    if (props.onKeyUp) {
      props.onKeyUp(e);
    }
  };

  const handleBlur = e => {
    inputOnBlur(e);
    if (addBadgeOnBlur) {
      handleTagAdd(getStringAsBadgeDatum(e.target.value));
    }
  };

  const onBadgeClose = clickedTag => {
    handleTagDelete(clickedTag);
  };

  const containerProps: { className?: string } = {};
  const calculatedAppearance = getInputAppearance();
  const dataCy = `textInput textInput.${calculatedAppearance}`;

  if (props.className) {
    containerProps.className = props.className;
  }
  return (
    <div {...containerProps} data-cy={dataCy}>
      <InputLabel
        appearance={calculatedAppearance}
        hidden={!showInputLabel}
        id={textInputWithBadgesId}
        required={props.required}
        tooltipContent={props.tooltipContent}
      >
        {props.inputLabel}
      </InputLabel>
      {getInputContent()}
    </div>
  );
};

export default TextInputWithBadges;
