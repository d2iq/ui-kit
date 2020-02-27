# Table v2

A v2 of the Table component was created to improve performance issues that were impossible to get around without eliminating core features and design specifications. For example: column sizing features, row hover styles, and horizontal scrolling styles.

Our goal is to gradually replace Table v1 usage with Table v2, deprecate Table v1, and eventually remove Table v1 and it's dependencies from ui-kit.

## Usage guidelines

For Table usage guidelines, please refer to the README documentation for Table v1. Anything that is not applicable to Table v2 has been marked as "applies to Table v1 only".

## Iterating on Table v2

### Selectable rows

Table v1 had a component called `CheckboxTable` to support the selection of individual rows of the table. Since this is not a commonly used feature, we have not added row selection features to Table v2.

A Jira ticket (D2IQ-65975) to support row selection has already been filed.

### Virtualization

Unlike Table v1, this table does not virualize rows or columns. We have been considering moving away from inifinite scrolling and going with pagination. If we find that virtualization is needed to maintain smooth performance, it should be pretty simple to virtualize table rows if all table rows are the same height.

### Pagination

We have not yet designed a pattern for paginating Table content. Stay tuned for updates
