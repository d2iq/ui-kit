import * as React from "react";
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

export default {
  title: "Forms/Form structure/Grouped fields/FieldList",
  component: FieldList,
  subcomponents: {
    FieldListColumn,
    FieldListColumnSeparator,
    FieldListAddButton
  }
};

export const EditableFieldsControlledInputs = () => (
  <FieldListHelper items={mockItems}>
    {({ removeItemHander, onAddItem, fieldUpdateHandler, items }) => (
      <>
        <FieldList
          data={items}
          onRemoveItem={removeItemHander}
          onAddItem={() =>
            onAddItem({
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
            {({ defaultProps, onChange, value }) => (
              <TextInput value={value} onChange={onChange} {...defaultProps} />
            )}
          </FieldListColumn>
          <FieldListColumn
            key="role"
            header="Role"
            pathToValue="role"
            onChange={fieldUpdateHandler}
          >
            {({ defaultProps, onChange, value }) => (
              <TextInput value={value} onChange={onChange} {...defaultProps} />
            )}
          </FieldListColumn>
          <FieldListColumn
            key="city"
            header="City"
            pathToValue="city"
            onChange={fieldUpdateHandler}
          >
            {({ defaultProps, onChange, value }) => (
              <TextInput value={value} onChange={onChange} {...defaultProps} />
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
);

export const DefaultUncontrolledInputs = () => {
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
};

export const VariedColumnWidths = () => (
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
);

export const DisabledRows = () => (
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
);

export const WAddButton = () => (
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
);

export const WithColumnSeparators = () => (
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
);
