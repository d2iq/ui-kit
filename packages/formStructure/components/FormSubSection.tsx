import * as React from "react";
import { formFieldStack } from "../style";
import { Card } from "../../card";
import { Icon } from "../../icon";
import { ResetButton } from "../../button";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Flex, FlexItem } from "../../styleUtils/layout";

interface FormSubSectionProps {
  onRemove?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const FormSubSection = ({
  children,
  className,
  "data-cy": dataCy = "formSubSection",
  onRemove
}: FormSubSectionProps) => {
  const subSectionContent = <div className={formFieldStack}>{children}</div>;
  return (
    <Card className={className} data-cy={dataCy}>
      {onRemove ? (
        <Flex gutterSize="xs">
          <FlexItem>{subSectionContent}</FlexItem>
          <FlexItem flex="shrink">
            <ResetButton
              onClick={onRemove}
              data-cy="formSubSection-removeButton"
            >
              <Icon shape={SystemIcons.Close} />
            </ResetButton>
          </FlexItem>
        </Flex>
      ) : (
        subSectionContent
      )}
    </Card>
  );
};

export default FormSubSection;
