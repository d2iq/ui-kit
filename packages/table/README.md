# Table

## Introduction

The Table component gets used to render Tables with the help of a virtual list. It exposes two properties one of them is the `data` which awaits an Array.

The other one is `children` which has to be either an Array of Columns or one Column.

# Column

## Introduction

Column component exposes 3 Properties and does not expect to have children. The Column component ensures that the right properties are available.

`header` is providing the content for the header.

`cellRenderer` is expecting a function which will get called for each cell and the return value should be a React element.

`width` expects a function. The function should return of a column width in pixels.
