import * as React from "react";
import { cx } from "emotion";
import {
  flush,
  liReset,
  padding,
  textSize,
  tintContentSecondary,
  tintContent,
  display
} from "../styles/styleUtils";

import { error } from "../../design-tokens/build/js/designTokens";

interface RenderProps {
  getValidationErrors: React.ReactNode;
  getHintContent: React.ReactNode;
  errorIds: string;
  hintContentId: string;
  isValid: boolean;
}

interface FormFieldWrapperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  errors?: React.ReactNode[];
  hintContent?: React.ReactNode;
  id: string;
}

class FormFieldWrapper extends React.PureComponent<FormFieldWrapperProps, {}> {
  public render() {
    const { children, errors, hintContent, id } = this.props;

    return children({
      getValidationErrors: this.getValidationErrors(errors, id),
      getHintContent: this.getHintContent(hintContent),
      errorIds: this.getErrorIds(),
      hintContentId: this.getHintContentId(),
      isValid: !errors || (errors && errors.length === 0)
    });
  }

  private getHintContentId() {
    return this.props.hintContent ? `${this.props.id}-hintContent` : "";
  }

  private getErrorId(error, id) {
    const errorIndex = this.props.errors
      ? this.props.errors.indexOf(error)
      : -1;
    return `${id}-errorMsg${errorIndex}`;
  }

  private getErrorIds() {
    return this.props.errors
      ? this.props.errors
          .map(error => this.getErrorId(error, this.props.id))
          .join(" ")
      : "";
  }

  private getHintContent(hintContent) {
    return hintContent ? (
      <span
        id={this.getHintContentId()}
        className={cx(
          tintContentSecondary,
          display("block"),
          padding("top", "xxs"),
          textSize("s")
        )}
      >
        {hintContent}
      </span>
    ) : null;
  }

  private getValidationErrors(errors, id) {
    if (!errors || (errors && errors.length === 0)) {
      return null;
    }

    return (
      <ul className={cx(flush("all"), textSize("s"), tintContent(error))}>
        {errors.map((error, index) => (
          <li
            key={index}
            id={this.getErrorId(error, id)}
            className={cx(liReset, padding("top", "xxs"))}
          >
            {error}
          </li>
        ))}
      </ul>
    );
  }
}

export default FormFieldWrapper;
