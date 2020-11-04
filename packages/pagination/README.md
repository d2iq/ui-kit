# Pagination

A `Pagination` component may be used to navigate through a large colletion of items that is divided into multiple pages.

## Usage

Use the Pagination component when 1 or more of the following criteria are met:

- A collection has greater than 30 items
- Screen real estate is tight and it would be helpful to show the list a few items at a time
- List objects are expensive to query and it would improve performance to split the queries up into paged results

### Customizing item count per page

Show the page length selection menu when 1 or more of the following criteria are met:

- there are more than 200 items
- it would be helpful to filter and sort on a larger batch of items
- it would be helpful to let the user only show 10 items at a time so they can focus on dense data

Do not show the page length selection menu if querying >30 items will have a negative on performance that would degrade the user experience.

## Layout

The `Pagination` component should be right-aligned with the list of items it is paging through.
