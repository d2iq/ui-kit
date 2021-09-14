import * as React from "react";
import { Flex, FlexItem } from "../styleUtils/layout";
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

export default {
  title: "Navigation/Accordion",
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionItemTitle,
    AccordionItemContent,
    AccordionItemTitleInteractive,
    StatelessAccordion
  }
};

export const Default = () => (
  <Accordion>
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

export const AccordionItemExpandedOnRender = () => (
  <Accordion initialExpandedItems={["panel1"]}>
    <AccordionItem id="panel1">
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

export const AllowingMultipleAccordionItemsOpen = () => (
  <Accordion allowMultipleExpanded={true}>
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

export const InteractiveElementsInTitle = () => (
  <Accordion>
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

export const WithDisabledAccordionItem = () => (
  <Accordion>
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

export const WithAccordionItemThatHasAppearanceDanger = () => (
  <Accordion>
    <AccordionItem>
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

export const AccordionItemsWithCustomId = () => (
  <Accordion>
    <AccordionItem id="panel-1">
      <AccordionItemTitle>Panel 1 (id: panel-1)</AccordionItemTitle>
      <AccordionItemContent>Content 1</AccordionItemContent>
    </AccordionItem>
    <AccordionItem id="panel-2">
      <AccordionItemTitle>Panel 2 (id: panel-2)</AccordionItemTitle>
      <AccordionItemContent>Content 2</AccordionItemContent>
    </AccordionItem>
    <AccordionItem id="panel-3">
      <AccordionItemTitle>Panel 3 (id: panel-3)</AccordionItemTitle>
      <AccordionItemContent>Content 3</AccordionItemContent>
    </AccordionItem>
  </Accordion>
);

export const CustomPaddingSizeOnAccordionItemContent = () => (
  <Accordion>
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

export const ControlledUsingStatelessAccordion = () => (
  <ToggleInputListStoryHelper>
    {({ changeHandler, selectedItems }) => {
      return (
        <Flex gutterSize="m">
          <FlexItem>
            <StatelessAccordion
              onChange={changeHandler}
              expandedItems={selectedItems}
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
