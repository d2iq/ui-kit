import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2, Text } from "../../styleUtils/typography";

interface FormSectionHeaderProps {
  /**
   * Allows custom styling
   */
  className?: string;
  title: string;
  subtitle?: React.ReactNode;
}

const FormSectionHeader = ({
  className,
  title,
  subtitle
}: FormSectionHeaderProps) => (
  <SpacingBox
    className={className}
    side="bottom"
    spacingSize="m"
    data-cy="formSectionHeader"
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
