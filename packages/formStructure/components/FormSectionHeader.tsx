import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2, Text } from "../../styleUtils/typography";

interface FormSectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const FormSectionHeader = ({ title, subtitle }: FormSectionHeaderProps) => (
  <SpacingBox side="bottom" spacingSize="m" data-cy="formSectionHeader">
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
