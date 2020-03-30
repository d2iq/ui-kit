import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  FieldList,
  FieldListColumn,
  FieldListColumnSeparator,
  FieldListAddButton
} from "..";
import { TextInput } from "../../textInput";
import FieldListHelper from "./helpers/FieldListStoryHelper";

const mockItems = [
  {
    name: "Brian Vaughn",
    role: "Software Engineer",
    city: "San Jose",
    id: 0
  },
  {
    name: "Jon Doe",
    role: "Product engineer",
    city: "Mountain View",
    id: 1
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    city: "San Francisco",
    id: 2
  }
];

const testRemoveHandler = rowIndex => () => {
  alert(`remove row ${rowIndex}`);
};
const testFieldUpdateHandler = (rowIndex, pathToValue) => () =>
  action(
    `update row ${rowIndex} with the property that has the key ${pathToValue}`
  );

storiesOf("Forms|Form layout/Grouped fields/FieldList", module)
  .add(
    "interactive example",
    () => (
      <FieldListHelper items={mockItems}>
        {({ removeItemHander, addItemHandler, fieldUpdateHandler, items }) => (
          <FieldList
            data={items}
            onRemoveItem={removeItemHander}
            pathToUniqueKey="id"
          >
            <FieldListColumn
              key="name"
              header="Name"
              pathToValue="name"
              onChange={fieldUpdateHandler}
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListColumn
              key="role"
              header="Role"
              pathToValue="role"
              onChange={fieldUpdateHandler}
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListColumn
              key="city"
              header="City"
              pathToValue="city"
              onChange={fieldUpdateHandler}
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListAddButton
              onClick={() => addItemHandler({ name: "", role: "", city: "" })}
            >
              Add Field
            </FieldListAddButton>
          </FieldList>
        )}
      </FieldListHelper>
    ),
    {
      info: {
        propTablesExclude: [FieldListHelper],
        propTables: [FieldList, FieldListColumn, FieldListAddButton]
      }
    }
  )
  .add("varied column widths", () => (
    <FieldList
      data={mockItems}
      onRemoveItem={testRemoveHandler}
      pathToUniqueKey="id"
    >
      <FieldListColumn
        key="name"
        header="Name"
        pathToValue="name"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="role"
        header="Role"
        pathToValue="role"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="city"
        header="City"
        pathToValue="city"
        onChange={testFieldUpdateHandler}
        minWidth={100}
        maxWidth={200}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
    </FieldList>
  ))
  .add("disabled rows", () => (
    <FieldList
      data={mockItems}
      onRemoveItem={testRemoveHandler}
      disabledRows={[1]}
      pathToUniqueKey="id"
    >
      <FieldListColumn
        key="name"
        header="Name"
        pathToValue="name"
        onChange={testFieldUpdateHandler}
      >
        {({ disabled, defaultProps, onChange, value }) => (
          <TextInput
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...defaultProps}
          />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="role"
        header="Role"
        pathToValue="role"
        onChange={testFieldUpdateHandler}
      >
        {({ disabled, defaultProps, onChange, value }) => (
          <TextInput
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...defaultProps}
          />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="city"
        header="City"
        pathToValue="city"
        onChange={testFieldUpdateHandler}
      >
        {({ disabled, defaultProps, onChange, value }) => (
          <TextInput
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...defaultProps}
          />
        )}
      </FieldListColumn>
    </FieldList>
  ))
  .add("w/ add button", () => (
    <FieldList
      data={mockItems}
      onRemoveItem={testRemoveHandler}
      pathToUniqueKey="id"
    >
      <FieldListColumn
        key="name"
        header="Name"
        pathToValue="name"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="role"
        header="Role"
        pathToValue="role"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumn
        key="city"
        header="City"
        pathToValue="city"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListAddButton>Add a row</FieldListAddButton>
    </FieldList>
  ))
  .add("w/ column separators", () => (
    <FieldList
      data={mockItems}
      onRemoveItem={testRemoveHandler}
      pathToUniqueKey="id"
    >
      <FieldListColumn
        key="name"
        header="Name"
        pathToValue="name"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumnSeparator key="separator1">:</FieldListColumnSeparator>
      <FieldListColumn
        key="role"
        header="Role"
        pathToValue="role"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
      <FieldListColumnSeparator key="separator2">👉</FieldListColumnSeparator>
      <FieldListColumn
        key="city"
        header="City"
        pathToValue="city"
        onChange={testFieldUpdateHandler}
      >
        {({ defaultProps, onChange, value }) => (
          <TextInput value={value} onChange={onChange} {...defaultProps} />
        )}
      </FieldListColumn>
    </FieldList>
  ));
