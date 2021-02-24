# Table

A new Table component was created to improve performance issues that were impossible to get around without eliminating core features and design specifications. For example: column sizing features, row hover styles, and horizontal scrolling styles.

## Usage guidelines

Use tables to display information in a way that’s easy to scan, so that user can look for patterns and insights. Users will use tables to troubleshoot, manage and monitor their systems.

### Column and Rows

Organize columns and rows based on the needs of the users. For collection tables, order the columns with most important columns starting at the left. For detail tables, order the columns with the most important columns starting at the top.

1. Primary column: The primary is always the first column in the table. This column should be the identifying attribute of your data set.

2. Long text: Truncate long text to fit in the row and add an ellipses with a tooltip on hover to show the full text.

3. Table headings: These should describe the content in the column. Try to stick to one word. Table heading should be in sentence case.

4. Empty values: Empty values can be rendered in the table as “–” by using the `EmptyCell` component. If there is some explanation for why the value is empty, the `MutedCell` component may be used to show a message that explans why there is no value.

5. Row hover state: On mouse over of a row on the table, the row should be highlighted to help the user focus in on the row details and match data they are seeing within that row.

6. We have a default row height that can be changed to accomodate for taller content, but this should only be used a last resort. Before making a row taller than the default height, try adjusting your design to fit on one line/fit within the default height.

### Column Alignment

For Collection tables, content should be left aligned except when using a different alignment helps with comprehension. For example,numeric data is easier to read when it’s right aligned. Column headers should match the content alignment.

For Detail tables, content should always be left aligned no matter if it’s numeric or string.

### Sorting

By default one column is sorted in each table in ascending or descending order. It’s up to the design lead to decide which column and what order. Columns can sort both A-Z and 0-100.

- Upward chevron is for ascending the items in the column. Ascending means smallest to largest, increasing in size.
- Downward chevron is for descending the items in the column. Descending means largest to smallest, decreasing in size.
- If the user selects another column to be sorted, the new column will by default sort in ascending direction. Once the new column is selected, the user can then change the sort type to descending.

### Horizontal Scroll

Horizontal scroll should only be activated when there are too many columns to fit the screen size. Keep the primary column, row actions, and column customization locked in position when horizontal scroll is activated.

### Primary Column

In the collection table, the primary column is the first column (on the left) in the table. This column is the identifying attribute on the table. In most cases, the primary column has a hyperlink to drill down into more details.

In the details table, the primary column is also the first column (on the left) in the two column table. This column represents all the unique key attributes on the table. The primary column in this case is not hyperlinked.

## Table Actions

### Global Actions

Global actions are actions that pertain to the whole table (i.e. Download, Logs).

- Global actions always remain at the top right corner of the table. They are never hidden from the user.
- We should always provide some feedback to indicate success or error when they press on the action.
- When group actions appear, the global actions will sit left of the group action.

## Layout

### Width

Collection tables should span the full width of the screen. In cases where there are too few columns to span the whole screen, the table should still span the whole screen.

Detail tables shouldn’t span the full width of the screen.

## Iterating on this Table component

### Selectable rows

Table v1 had a component called `CheckboxTable` to support the selection of individual rows of the table. Since this is not a commonly used feature, we have not added row selection features to Table v2.

A Jira ticket (D2IQ-65975) to support row selection has already been filed.

### Virtualization

Unlike Table v1, this table does not virualize rows or columns. We have been considering moving away from inifinite scrolling and going with pagination. If we find that virtualization is needed to maintain smooth performance, it should be pretty simple to virtualize table rows if all table rows are the same height.

### Pagination

We have not yet designed a pattern for paginating Table content. Stay tuned for updates
