import * as React from "react";
import { cx } from "emotion";
import FormFieldWrapper from "../../shared/components/FormFieldWrapper";
import {
  getInputAppearanceStyle,
  inputContainer
} from "../../shared/styles/formStyles";
import { Badge } from "../../badge";
import { flex, textTruncate } from "../../shared/styles/styleUtils";
import {
  badgeInput,
  badgeInputContainer,
  badgeInputContents,
  badgeText
} from "../style";
import { Flex, FlexItem } from "../../styleUtils/layout";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXxs } from "../../design-tokens/build/js/designTokens";
import { Icon } from "../../icon";
import Clickable from "../../clickable/components/clickable";
import { TextInputWithIconProps } from "./TextInputWithIcon";
import { TextInputWithIcon } from "..";
import { BadgeAppearance } from "../../badge/components/badge";
import { StateChangeOptions } from "downshift";

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
}

export const getStringAsBadgeDatum = (
  badgeLabelString: string
): BadgeDatum => ({
  label: badgeLabelString,
  value: badgeLabelString
});

export class TextInputWithBadges extends TextInputWithIcon<
  TextInputWithBadgesProps,
  {}
> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTagAdd = this.handleTagAdd.bind(this);
    this.handleTagDelete = this.handleTagDelete.bind(this);
  }

  protected getInputElementProps() {
    let baseProps = super.getInputElementProps();
    const {
      badges,
      onBadgeChange,
      downshiftReset,
      ...inputProps
    } = baseProps as TextInputWithBadgesProps;
    inputProps.onKeyDown = this.handleKeyDown;
    inputProps.onKeyUp = this.handleKeyUp;
    inputProps.type = "text";
    inputProps.ref = this.inputRef;
    return inputProps;
  }

  protected getInputContent() {
    const inputAppearance = this.getInputAppearance();
    const { badgeAppearance = "primary" } = this.props;
    return (
      <FormFieldWrapper
        id={this.props.id}
        errors={this.props.errors}
        hintContent={this.props.hintContent}
      >
        {({ getValidationErrors, getHintContent, isValid, describedByIds }) => (
          <React.Fragment>
            <div
              className={cx(
                flex({ wrap: "wrap" }),
                inputContainer,
                badgeInputContainer,
                getInputAppearanceStyle(inputAppearance)
              )}
            >
              {this.props.badges &&
                this.props.badges.map(badge => (
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
                          <Clickable
                            action={this.onBadgeClose.bind(this, badge)}
                          >
                            <span>
                              <Icon
                                shape={SystemIcons.Close}
                                size={iconSizeXxs}
                              />
                            </span>
                          </Clickable>
                        </FlexItem>
                      </Flex>
                    </Badge>
                  </span>
                ))}
              {this.getInputElement(
                [badgeInput, badgeInputContents],
                isValid,
                describedByIds
              )}
            </div>
            {getHintContent}
            {getValidationErrors}
          </React.Fragment>
        )}
      </FormFieldWrapper>
    );
  }

  private handleTagDelete(tagToDelete: BadgeDatum) {
    const { onBadgeChange, badges = [] } = this.props;

    if (onBadgeChange) {
      onBadgeChange(
        badges.filter(badge => badge.value !== tagToDelete.value),
        tagToDelete
      );
    }
  }

  private handleTagAdd(tagToAdd: BadgeDatum) {
    const { onBadgeChange, badges = [] } = this.props;
    const badgeValues = badges.map(badge => badge.value);

    if (this.props.downshiftReset) {
      this.props.downshiftReset();
    }

    if (
      onBadgeChange &&
      tagToAdd.value.replace(/\s/g, "").length &&
      !badgeValues.includes(tagToAdd.value)
    ) {
      onBadgeChange([...badges, tagToAdd], tagToAdd);
      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.value = "";
      }
    }
  }

  private handleKeyDown(e) {
    if (!e.target.value && e.key === "Backspace" && this.props.badges) {
      this.handleTagDelete(this.props.badges[this.props.badges.length - 1]);
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  private handleKeyUp(e) {
    if (e.key === "Enter") {
      this.handleTagAdd(getStringAsBadgeDatum(e.target.value));
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }
  }

  private onBadgeClose(clickedTag) {
    this.handleTagDelete(clickedTag);
  }
}

export default TextInputWithBadges;
