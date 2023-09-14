import * as React from "react";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { cx } from "@emotion/css";
import {
  greyLightDarken2,
  themeError
} from "../../design-tokens/build/js/designTokens";
import { tintText, visuallyHidden, flex, margin } from "../styles/styleUtils";
import { Icon, InputAppearance, Tooltip } from "../../index";
import { getLabelStyle } from "../styles/formStyles";

const reqStar = <span className={cx(tintText(themeError))}> *</span>;

export interface LabelProps {
  appearance?: InputAppearance | string;
  hidden?: boolean;
  id?: string;
  required?: boolean;
  tooltipContent?: React.ReactNode;
  className?: string;
  "data-cy"?: string;
  children: React.ReactNode;
}

const InputLabel = ({
  appearance,
  hidden,
  id,
  required,
  tooltipContent,
  className,
  "data-cy": dataCy = "textInput-label",
  children
}: LabelProps) => {
  const hasError = appearance === InputAppearance.Error;
  const labelClassName = hidden ? cx(visuallyHidden) : getLabelStyle(hasError);
  const generatedId = `textInput-${React.useId()}`;
  const labelId = id || generatedId;

  return (
    <>
      {tooltipContent ? (
        <div className={flex()}>
          <label
            className={cx(labelClassName, className)}
            htmlFor={labelId}
            data-cy={dataCy}
            hidden={hidden}
          >
            {children}
            {required ? reqStar : null}
          </label>
          <span className={cx(margin("left", "xs"), margin("bottom", "xxs"))}>
            <Tooltip
              trigger={
                <Icon
                  color={greyLightDarken2}
                  shape={SystemIcons.CircleQuestion}
                  size="xs"
                />
              }
              id={`labelTooltip-${labelId}`}
            >
              {tooltipContent}
            </Tooltip>
          </span>
        </div>
      ) : (
        <label
          className={cx(labelClassName, className)}
          htmlFor={labelId}
          data-cy={dataCy}
          hidden={hidden}
        >
          {children}
          {required ? reqStar : null}
        </label>
      )}
    </>
  );
};

export default InputLabel;
