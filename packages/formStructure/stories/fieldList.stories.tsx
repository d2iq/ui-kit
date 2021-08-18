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
import { MonospaceText } from "../../styleUtils/typography";

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

const testFieldUpdateHandler = (rowIndex, pathToValue) => () =>
  action(
    `update row ${rowIndex} with the property that has the key ${pathToValue}`
  );

storiesOf("Forms|Form structure/Grouped fields/FieldList", module)
  .add(
    "editable fields (controlled inputs)",
    () => (
      <FieldListHelper items={mockItems}>
        {({ removeItemHander, addItemHandler, fieldUpdateHandler, items }) => (
          <>
            <FieldList
              data={items}
              onRemoveItem={removeItemHander}
              onAddItem={() =>
                addItemHandler({
                  name: "",
                  role: "",
                  city: "",
                  id: Math.random()
                })
              }
              pathToUniqueKey="id"
            >
              <FieldListColumn
                key="name"
                header="Name"
                pathToValue="name"
                onChange={fieldUpdateHandler}
              >
                {({ defaultProps, onChange, value, rowIndex }) => {
                  console.log("items:", items);
                  console.log("rowIndex:", rowIndex);
                  console.log("CRASH: ", items[rowIndex].name);
                  return (
                    <TextInput
                      value={value}
                      onChange={onChange}
                      {...defaultProps}
                    />
                  );
                }}
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
              <FieldListAddButton>Add Field</FieldListAddButton>
            </FieldList>
            <div style={{ marginTop: "1em" }}>
              <div>FieldList data:</div>
              <div style={{ background: "#eee", padding: "0.5em" }}>
                <MonospaceText tag="pre">
                  {JSON.stringify(items, null, 2)}
                </MonospaceText>
              </div>
            </div>
          </>
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
  .add("default (uncontrolled inputs)", () => {
    return (
      <FieldList data={mockItems} pathToUniqueKey="id">
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
        <FieldListColumn key="role" header="Role" pathToValue="role">
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListColumn key="city" header="City" pathToValue="city">
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
      </FieldList>
    );
  })
  .add("varied column widths", () => (
    <FieldList data={mockItems} pathToUniqueKey="id">
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
    <FieldList data={mockItems} disabledRows={[1]} pathToUniqueKey="id">
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
    <FieldList data={mockItems} pathToUniqueKey="id">
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
    <FieldList data={mockItems} pathToUniqueKey="id">
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
  ))
  .add("break!!!!", () => {
    const [items, setItems] = React.useState(mockItems);
    const removeItem = rowIndex => () => {
      setItems(prev => {
        prev.splice(rowIndex, 1);
        return [...prev];
      });
    };

    return (
      <FieldList onRemoveItem={removeItem} data={items} pathToUniqueKey="id">
        <FieldListColumn key="name" header="name" pathToValue="name">
          {({ defaultProps, onChange, value, rowIndex }) => {
            console.log(items[rowIndex]);

            return (
              <TextInput value={value} onChange={onChange} {...defaultProps} />
            );
          }}
        </FieldListColumn>
      </FieldList>
    );
  });
