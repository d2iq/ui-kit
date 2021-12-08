import * as React from "react";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Story, Meta } from "@storybook/react";
import { SecondaryButton } from "../button";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemContent,
  AccordionItemTitleInteractive,
  StatelessAccordion
} from "./";
import ToggleInputListStoryHelper from "../toggleInputList/stories/helpers/ToggleInputListStoryHelper";
import { ToggleInputList } from "..";
import { AccordionBaseProps } from "./types";

export default {
  title: "Navigation/Accordion",
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemContent,
    AccordionItemTitleInteractive,
    StatelessAccordion
  },
  argTypes: {
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<AccordionBaseProps> = args => (
  <Accordion {...args}>
    <AccordionItem id="panel1">
      <AccordionItemTitle>Panel 1</AccordionItemTitle>
      <AccordionItemContent>
        Content 1 <a href="google.com">has focusable content</a>
      </AccordionItemContent>
    </AccordionItem>
    <AccordionItem id="panel2">
      <AccordionItemTitle>Panel 2</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem id="panel3">
      <AccordionItemTitle>Panel 3</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});

export const AccordionItemExpandedOnRender = Template.bind({});
AccordionItemExpandedOnRender.args = { initialExpandedItems: ["panel1"] };

export const AllowingMultipleAccordionItemsOpen = Template.bind({});
AllowingMultipleAccordionItemsOpen.args = { allowMultipleExpanded: true };

export const InteractiveElementsInTitle = args => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionItemTitleInteractive>
        {({ getHeading }) => (
          <Flex align="center">
            <FlexItem>{getHeading("Panel 1")}</FlexItem>
            <FlexItem flex="shrink">
              <SecondaryButton>Action</SecondaryButton>
            </FlexItem>
          </Flex>
        )}
      </AccordionItemTitleInteractive>
      <AccordionItemContent>
        Content 1 <a href="google.com">has focusable content</a>
      </AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 2</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 3</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const WithChangeHandler = () => {
  const onChange = expanded => {
    if (expanded.length) {
      alert(`expanded item IDs: ${expanded.join(", ")}`);
    }
  };
  return (
    <Accordion onChange={onChange} allowMultipleExpanded={true}>
      <AccordionItem>
        <AccordionItemTitle>Panel 1</AccordionItemTitle>
        <AccordionItemContent>
          Content 1 <a href="google.com">has focusable content</a>
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>Panel 2</AccordionItemTitle>
        <AccordionItemContent>Content 2</AccordionItemContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>Panel 3</AccordionItemTitle>
        <AccordionItemContent>Content 3</AccordionItemContent>
      </AccordionItem>
    </Accordion>
  );
};

export const WithDisabledAccordionItem = args => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionItemTitle disabled={true}>Panel 1</AccordionItemTitle>
      <AccordionItemContent>Content 1</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 2</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 3</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const WithAccordionItemThatHasAppearanceDanger = args => (
  <Accordion>
    <AccordionItem {...args}>
      <AccordionItemTitle appearance="danger">Panel 1</AccordionItemTitle>
      <AccordionItemContent>Content 1</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 2</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 3</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const CustomPaddingSizeOnAccordionItemContent = args => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionItemTitle>Panel 1</AccordionItemTitle>
      <AccordionItemContent paddingSize="xxl">
        Content 1 has paddingSize="xxl"
      </AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 2</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>Panel 3</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const ControlledUsingStatelessAccordion = args => (
  <ToggleInputListStoryHelper>
    {({ changeHandler, selectedItems }) => {
      return (
        <Flex gutterSize="m">
          <FlexItem>
            <StatelessAccordion
              onChange={changeHandler}
              expandedItems={selectedItems}
              {...args}
            >
              <AccordionItem id="first">
                <AccordionItemTitle>Panel 1</AccordionItemTitle>
                <AccordionItemContent>Content 1</AccordionItemContent>
              </AccordionItem>
              <AccordionItem id="second">
                <AccordionItemTitle>Panel 2</AccordionItemTitle>
                <AccordionItemContent>Content 2</AccordionItemContent>
              </AccordionItem>
              <AccordionItem id="third">
                <AccordionItemTitle>Panel 3</AccordionItemTitle>
                <AccordionItemContent>Content 3</AccordionItemContent>
              </AccordionItem>
            </StatelessAccordion>
          </FlexItem>
          <FlexItem>
            <ToggleInputList
              id="checkbox"
              items={[
                { inputLabel: "Panel 1", id: "id.1", value: "first" },
                { inputLabel: "Panel 2", id: "id.2", value: "second" },
                { inputLabel: "Panel 3", id: "id.3", value: "third" }
              ]}
              listLabel="Open panels"
              onChange={changeHandler}
              selectedItems={selectedItems}
            />
          </FlexItem>
        </Flex>
      );
    }}
  </ToggleInputListStoryHelper>
);
