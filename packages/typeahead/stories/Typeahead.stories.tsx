import * as React from "react";
import { Typeahead, TextInput } from "../../index";
import MultiselectTypeahead from "./helpers/MultiselectTypeahead";
import FilteredListTypeahead from "./helpers/FilteredListTypeahead";
import { padding } from "../../shared/styles/styleUtils";
import { complexItems, items } from "./helpers/itemMocks";
import { css } from "emotion";

const storyWrapper = css`
  width: 300px;
`;

export default {
  title: "Forms/Typeahead",
  component: Typeahead
};

export const Default = () => (
  <div className={storyWrapper}>
    <Typeahead
      items={items}
      textField={
        <TextInput
          id="default"
          inputLabel="Default"
          placeholder="Placeholder"
        />
      }
    />
  </div>
);

export const MenuHasMaxHeight = () => (
  <div className={storyWrapper}>
    <Typeahead
      items={items}
      textField={
        <TextInput
          id="maxHeight"
          inputLabel="Menu max height"
          placeholder="Placeholder"
        />
      }
      menuMaxHeight={100}
    />
  </div>
);

export const PreFilledSelectedItem = () => (
  <div className={storyWrapper}>
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
    />
  </div>
);

export const WithOnSelectCallback = () => {
  const onSelectHandler = selectedItems => {
    alert(`${selectedItems[0]} selected`);
  };
  return (
    <div className={storyWrapper}>
      <Typeahead
        items={items}
        onSelect={onSelectHandler}
        textField={
          <TextInput
            id="onselect"
            inputLabel="onSelect"
            placeholder="Placeholder"
          />
        }
      />
    </div>
  );
};

export const Multiselect = () => (
  <div className={storyWrapper}>
    <MultiselectTypeahead>
      {({ items, selectHandler, selectedItems }) => (
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
          onSelect={selectHandler}
        />
      )}
    </MultiselectTypeahead>
  </div>
);

export const ComplexListItems = () => (
  <div className={storyWrapper}>
    <Typeahead
      items={complexItems}
      textField={
        <TextInput
          id="complex"
          inputLabel="Elements as items"
          placeholder="Placeholder"
        />
      }
    />
  </div>
);

export const WithADisabledItem = () => (
  <div className={storyWrapper}>
    <Typeahead
      items={[
        ...items,
        { label: "K8sphere", value: "K8sphere", disabled: true }
      ]}
      textField={
        <TextInput
          id="default"
          inputLabel="With a disabled item"
          placeholder="Placeholder"
        />
      }
    />
  </div>
);

export const FilterWhileTyping = () => (
  <div className={storyWrapper}>
    <FilteredListTypeahead items={items} />
  </div>
);

export const CustomMenuEmptyState = () => (
  <div className={storyWrapper}>
    <FilteredListTypeahead
      menuEmptyState={<div className={padding("all")}>Nothing to show</div>}
      items={items}
    />
  </div>
);
