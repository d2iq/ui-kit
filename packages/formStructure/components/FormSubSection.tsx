import * as React from "react";
import { formFieldStack } from "../style";
import { Card } from "../../card";
import { Icon } from "../../icon";
import { ResetButton } from "../../button";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Flex, FlexItem } from "../../styleUtils/layout";

interface FormSubSectionProps {
  onRemove?: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

const FormSubSection: React.SFC<FormSubSectionProps> = ({
  children,
  onRemove
}) => {
  const subSectionContent = <div className={formFieldStack}>{children}</div>;
  return (
    <Card data-cy="formSubSection">
      {Boolean(onRemove) ? (
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
