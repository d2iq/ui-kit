import * as React from "react";
import nextId from "react-id-generator";
import { cx } from "@emotion/css";
import {
  flush,
  liReset,
  padding,
  textSize,
  tintContentSecondary,
  tintContent,
  display
} from "../styles/styleUtils";

import { themeError } from "../../design-tokens/build/js/designTokens";

interface RenderProps {
  describedByIds: string;
  getValidationErrors: React.ReactNode;
  getHintContent: React.ReactNode;
  isValid: boolean;
}

interface FormFieldWrapperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  errors?: React.ReactNode[];
  hintContent?: React.ReactNode;
  id?: string;
}

const FormFieldWrapper = ({
  children,
  errors,
  hintContent,
  id = nextId("formFieldWrapper-")
}: FormFieldWrapperProps) => {
  const getHintContentId = () => {
    return hintContent ? `${id}-hintContent` : "";
  };

  const getErrorId = (error, id) => {
    const errorIndex = errors ? errors.indexOf(error) : -1;
    return `${id}-errorMsg${errorIndex}`;
  };

  const getErrorIds = () => {
    return errors ? errors.map(error => getErrorId(error, id)).join(" ") : "";
  };

  const getHintContent = hintContent => {
    return hintContent ? (
      <span
        id={getHintContentId()}
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
  };

  const getValidationErrors = (errors, id) => {
    if (!errors || (errors && errors.length === 0)) {
      return null;
    }

    return (
      <ul className={cx(flush("all"), textSize("s"), tintContent(themeError))}>
        {errors.map((error, index) => (
          <li
            key={index}
            id={getErrorId(error, id)}
            className={cx(liReset, padding("top", "xxs"))}
          >
            {error}
          </li>
        ))}
      </ul>
    );
  };

  const getDescribedBy = (hintContent, errors) => {
    if (hintContent && errors) {
      return `${hintContent} ${errors}`;
    }
    return errors || hintContent;
  };

  return (
    <>
      {children({
        getValidationErrors: getValidationErrors(errors, id),
        getHintContent: getHintContent(hintContent),
        describedByIds: getDescribedBy(getHintContentId(), getErrorIds()),
        isValid: !errors || (errors && errors.length === 0)
      })}
    </>
  );
};

export default FormFieldWrapper;
