import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Typeahead, TextInput } from "../../index";
import MultiselectTypeahead from "./helpers/MultiselectTypeahead";
import FilteredListTypeahead from "./helpers/FilteredListTypeahead";
import { padding } from "../../shared/styles/styleUtils";
import { css } from "@emotion/css";

const storyWrapper = css`
  width: 300px;
`;

const items = [
  { label: "Exosphere", value: "Exosphere" },
  { label: "Thermosphere", value: "Thermosphere" },
  { label: "Mesosphere", value: "Mesosphere" },
  { label: "Stratosphere", value: "Stratosphere" },
  { label: "Ozone Layer", value: "Ozone Layer" },
  { label: "Troposphere", value: "Troposphere" }
];

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
    {...args}
  />
);

export const Default = Template.bind({});

export const MenuHasMaxHeight = Template.bind({});
MenuHasMaxHeight.args = {
  menuMaxHeight: 100,
  textField: (
    <TextInput
      id="maxHeight"
      inputLabel="Menu max height"
      placeholder="Placeholder"
    />
  )
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
  textField: (
    <TextInput id="onselect" inputLabel="onSelect" placeholder="Placeholder" />
  )
};

export const Multiselect = () => (
  <MultiselectTypeahead>
    {({ onSelect, selectedItems }) => (
      <Typeahead
        items={items}
        selectedItems={selectedItems}
        multiSelect={true}
        textField={
          <TextInput
            id="multiselect"
            inputLabel="Multiselectable"
            placeholder="Placeholder"
          />
        }
        onSelect={onSelect}
      />
    )}
  </MultiselectTypeahead>
);

export const WithDisabledItem = Template.bind({});
WithDisabledItem.args = {
  items: [...items, { label: "K8sphere", value: "K8sphere", disabled: true }],
  textField: (
    <TextInput
      id="withdisabled"
      inputLabel="With a disabled item"
      placeholder="Placeholder"
    />
  )
};

export const FilterWhileTyping = () => <FilteredListTypeahead items={items} />;

export const CustomMenuEmptyState = () => (
  <FilteredListTypeahead
    menuEmptyState={<div className={padding("all")}>Nothing to show</div>}
    items={items}
  />
);
