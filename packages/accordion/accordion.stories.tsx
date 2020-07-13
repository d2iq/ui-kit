import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Flex, FlexItem } from "../styleUtils/layout";
import { SecondaryButton } from "../button";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemContent,
  AccordionItemTitleInteractive
} from "./";

storiesOf("Navigation|Accordion", module)
  .add("default", () => (
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
  ))
  .add("with an accordion item expanded on render", () => (
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
  ))
  .add("allowing multiple accordion items open", () => (
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
  ))
  .add("with interactive elements in title", () => (
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
  ))
  .add("with onChange handler", () => {
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
  })
  .add("with a disabled AccordionItem", () => (
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
  ))
  .add("with an AccordionItem that has appearance='danger'", () => (
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
  ))
  .add("AccordionItems with custom IDs", () => (
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
  ));
