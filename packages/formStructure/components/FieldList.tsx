import * as React from "react";
import {
  FieldListColumnProps,
  FieldListColumnSeparator,
  FieldListColumnWidthProps
} from "./FieldListColumn";
import { cx } from "emotion";
import ResetButton from "../../button/components/ResetButton";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  iconSizeXs,
  themeTextColorDisabled,
  themeTextColorPrimary
} from "../../design-tokens/build/js/designTokens";
import { SpacingBox } from "../../styleUtils/modifiers";
import { Text } from "../../styleUtils/typography";
import { FieldListAddButton, FieldListColumn } from "..";
import { ButtonProps } from "../../button/components/ButtonBase";
import { findNestedPropertyInObject } from "../../utilities";
import {
  getFieldRowGrid,
  fieldListStack,
  invisibleColHeader,
  fieldWrapper
} from "../style";

const REMOVE_ICON_SIZE = iconSizeXs;

interface FieldListProps {
  /** The data to populate the field values with */
  data: Array<{ key: string | number; [key: string]: any }>;
  /** An array of the indexes of disabled rows */
  disabledRows?: number[];
  /** The callback for when the remove button is clicked */
  onRemoveItem: (affectedRowIndex: number) => () => void;
}

const FieldList: React.SFC<FieldListProps> = ({
  children,
  data,
  disabledRows,
  onRemoveItem
}) => {
  const columns = (React.Children.toArray(children) as Array<
    React.ReactElement<FieldListColumnProps & FieldListColumnWidthProps>
  >).filter(
    item =>
      item.type === FieldListColumn || item.type === FieldListColumnSeparator
  );

  const renderHeader = () => {
    return (
      <SpacingBox
        side="bottom"
        spacingSize="xxs"
        className={getFieldRowGrid(columns, REMOVE_ICON_SIZE)}
      >
        {columns.map(col => (
          <Text
            tag="div"
            weight="medium"
            className={cx({
              [invisibleColHeader]: col.type === FieldListColumnSeparator
            })}
            dataCy="fieldList-columnHeader"
            key={col.props.key}
          >
            {col.type === FieldListColumn && col.props.header}
            {col.type === FieldListColumnSeparator && col.props.children}
          </Text>
        ))}
      </SpacingBox>
    );
  };

  const isRowDisabled = rowIndex =>
    Boolean(disabledRows && disabledRows.includes(rowIndex));

  const renderRows = (rowData, rowIndex) => {
    return (
      <div
        className={getFieldRowGrid(columns, REMOVE_ICON_SIZE)}
        key={`fieldList-row.${rowData.key}`}
      >
        {columns.map((col, i) => {
          return (
            <div data-cy="fieldList-cell" key={i} className={fieldWrapper}>
              {col.type === FieldListColumn &&
                col.props.children({
                  ...(col.props.onChange && col.props.pathToValue
                    ? {
                        onChange: col.props.onChange(
                          rowIndex,
                          col.props.pathToValue
                        )
                      }
                    : {}),
                  fieldData: rowData,
                  rowIndex,
                  value: findNestedPropertyInObject(
                    data[rowIndex],
                    col.props.pathToValue
                  ),
                  disabled: isRowDisabled(rowIndex),
                  defaultProps: {
                    key: `${col.props.pathToValue}-${rowIndex}`,
                    id: `${col.props.pathToValue}-${rowIndex}`,
                    inputLabel: `${col.props.header} ${rowIndex}`
                  }
                })}
              {col.type === FieldListColumnSeparator && col.props.children}
            </div>
          );
        })}
        {/* this wrapper div is needed to fix a vertical centering bug in Firefox with <button> elements that are children of display: grid */}
        <div>
          <ResetButton
            onClick={onRemoveItem(rowIndex)}
            disabled={isRowDisabled(rowIndex)}
            data-cy="fieldList-removeButton"
          >
            <Icon
              shape={SystemIcons.Close}
              size={REMOVE_ICON_SIZE}
              color={
                isRowDisabled(rowIndex)
                  ? themeTextColorDisabled
                  : themeTextColorPrimary
              }
            />
          </ResetButton>
        </div>
      </div>
    );
  };

  const renderAddButton = () => {
    return (React.Children.toArray(children) as Array<
      React.ReactElement<ButtonProps>
    >).find(child => child.type === FieldListAddButton);
  };

  return (
    <>
      {data.length ? renderHeader() : null}
      <div className={fieldListStack}>
        {data.length ? data.map((datum, i) => renderRows(datum, i)) : null}
        {renderAddButton()}
      </div>
    </>
  );
};

export default FieldList;
