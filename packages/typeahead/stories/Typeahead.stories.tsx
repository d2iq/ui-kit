import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Typeahead, TextInput } from "../../index";
import MultiselectTypeahead from "./helpers/MultiselectTypeahead";
import FilteredListTypeahead from "./helpers/FilteredListTypeahead";
import { padding } from "../../shared/styles/styleUtils";
import { complexItems, items } from "./helpers/itemMocks";
import { css } from "@emotion/css";

const storyWrapper = css`
  width: 300px;
`;

export default {
  title: "Forms/Typeahead",
  component: Typeahead,
  decorators: [Story => <div className={storyWrapper}>{Story()}</div>]
} as Meta;

const Template: Story = args => (
  <Typeahead
    items={items}
    textField={
      <TextInput id="default" inputLabel="Default" placeholder="Placeholder" />
    }
  />
);

export const Default = Template.bind({});

export const MenuHasMaxHeight = Template.bind({});
MenuHasMaxHeight.args = {
  menuMaxHeight: 100
};

export const PreFilledSelectedItem = args => (
  <Typeahead
    items={items}
    selectedItems={[items[1].value]}
    textField={
      <TextInput
        id="prefilled"
        inputLabel="Pre-filled"
        placeholder="Placeholder"
        hintContent="This is acting as a controlled input, so the value won't change"
        value={items[1].value}
      />
    }
    {...args}
  />
);

const onSelectHandler = selectedItems => {
  alert(`${selectedItems[0]} selected`);
};
export const WithOnSelectCallback = Template.bind({});
WithOnSelectCallback.args = {
  onSelect: onSelectHandler,
  items
};

export const ComplexListItems = Template.bind({});
ComplexListItems.args = {
  items: complexItems
};

export const WithDisabledItem = Template.bind({});
WithDisabledItem.args = {
  items: [...items, { label: "K8sphere", value: "K8sphere", disabled: true }]
};

export const FilterWhileTyping = () => <FilteredListTypeahead items={items} />;
