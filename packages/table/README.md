# Tables

## Introduction

Use tables to display information in a way that’s easy to scan, so that user can look for patterns and insights. Users will use tables to troubleshoot, manage and monitor their systems. 

## Types of Tables

There are two types of tables used in DC/OS today. 

1. Collection Tables: Collection tables are generally used when information needs to be displayed in more than two columns.
2. Detail Tables: Detail tables generally used when information can be displayed in two columns.

## Width

Collection tables should span the full width of the screen. In cases where there are too few columns to span the whole screen, the table should still span the whole screen. 

Detail tables shouldn’t span the full width of the screen.

## Column and Rows

Organize columns and rows based on the needs of the users. For collection tables, order the columns with most important columns starting at the left. For detail tables, order the columns with the most important columns starting at the top. 

1. Primary column: The primary is always the first column in the table. This column should be the identifying attribute of your data set. 

2. Long text: Truncate long text to fit in the row and add an ellipses with a tooltip on hover to show the full text. 

3. Table Headings: These should describe the content in the column. Try to stick to one word. Table heading should be in sentence case. 

4. Empty values: Empty values should be expressed in the table as “N/A”. 

5. Row hover state: On mouse over of a row on the table, the row should be highlighted to help the user focus in on the row details and match data they are seeing within that row. 

## Column Alignment

For Collection tables, content should be left aligned except when using a different alignment helps with comprehension. For example,numeric data is easier to read when it’s right aligned. Column headers should match the content alignment. 

For Detail tables, content should always be left aligned no matter if it’s numeric or string. 

## Sorting

By default one column is sorted in each table in ascending or descending order. It’s up to the design lead to decide which column and what order. Columns can sort both A-Z and 0-100. 

* Upward chevron is for ascending the items in the column. Ascending means smallest to largest, increasing in size.
* Downward chevron is for descending the items in the column. Descending means largest to smallest, decreasing in size.
* If the user selects another column to be sorted, the new column will by default sort in ascending direction. Once the new column is selected, the user can then change the sort type to descending. 

## Horizontal Scroll

Horizontal scroll should only be activated when there are too many columns to fit the screen size. Keep the primary column, row actions, and column customization locked in position when horizontal scroll is activated.

## Primary Column 

In the collection table, the primary column is the first column (on the left) in the table. This column is the identifying attribute on the table. In most cases, the primary column has a hyperlink to drill down into more details. 

In the details table, the primary column is also the first column (on the left) in the two column table. This column represents all the unique key attributes on the table. The primary column in this case is not hyperlinked. 
