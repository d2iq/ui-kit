import * as React from "react";
import { TextInputProps } from "../../textInput/components/TextInput";

type DefaultProps = Pick<TextInputProps, "key" | "id" | "inputLabel">;

type Value<T> = T;

interface RenderProps<T, E> {
  /** Whether field is disabled */
  disabled?: boolean;
  /** The data to populate a the field */
  fieldData: Record<string, any>;
  /** The callback for when an input value is changed */
  onChange?: (e: E) => void;
  /** The index of the row of the current field */
  rowIndex: number;
  /** Boilerplate props to pass that are passed to a field component to support screenreaders. The `inputLabel` prop is specific to ui-kit's form components. If you're using form components that are not from ui-kit, you'll have to manually use this object to create a visually hidden `<label>` element, and ensure the `<label>`'s `for` attribute matches the corresponding `<input>`'s ID property. */
  defaultProps: DefaultProps;
  /** The value of the current field */
  value: Value<T>;
}

export interface FieldListColumnWidthProps {
  /** The minimum width a column of fields can be. Accepts a number or any value that can be passed to CSS's `grid-template-columns` */
  minWidth?: number | string;
  /** The maximum width a column of fields can be. Accepts a number or any value that can be passed to CSS's `grid-template-columns` */
  maxWidth?: number | string;
  key: React.Key;
}
export interface FieldListColumnProps<
  T = string,
  E = React.FormEvent<HTMLInputElement>
> {
  /** Returns a function with render props as an argument. Storybook does not currently have a way to document render props, so you'll have to view the source of the `FieldListColumn` component to read the documentation. */
  children: (renderProps: RenderProps<T, E>) => React.ReactNode;
  /** The header that labels the column */
  header: React.ReactNode;
  /** The path where the column fields' value exists in the object passed to `FieldList` component's `data` prop */
  pathToValue: string;
  /** The callback for when any input value in the `FieldList` is changed */
  onChange?: (rowIndex: number, pathToValue: string) => (e) => void;
}

export const FieldListColumn: <
  T = string,
  E = React.FormEvent<HTMLInputElement>
>(
  props: FieldListColumnProps<T, E> & FieldListColumnWidthProps
) => React.ReactElement<
  FieldListColumnProps<T, E> & FieldListColumnWidthProps
> = () => <React.Fragment />;

export const FieldListColumnSeparator: React.SFC<
  FieldListColumnWidthProps
> = () => <React.Fragment />;
