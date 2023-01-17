import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2, Text } from "../../styleUtils/typography";

interface FormSectionHeaderProps {
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Title text
   */
  title: string;
  /**
   * Subtitle text
   */
  subtitle?: React.ReactNode;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const FormSectionHeader = ({
  className,
  title,
  subtitle,
  "data-cy": dataCy = "formSectionHeader"
}: FormSectionHeaderProps) => (
  <SpacingBox
    className={className}
    side="bottom"
    spacingSize="m"
    data-cy={dataCy}
  >
    <HeadingText2 data-cy="formSectionHeader-title">{title}</HeadingText2>
    {subtitle && (
      <SpacingBox side="top" spacingSize="xs">
        <Text tag="div" data-cy="formSectionHeader-subtitle">
          {subtitle}
        </Text>
      </SpacingBox>
    )}
  </SpacingBox>
);

export default FormSectionHeader;
