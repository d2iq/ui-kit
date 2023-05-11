# AppChrome

The `AppChrome` component is a layout component that provides a consistent page layout for an application. It consists of a header bar at the top, a sidebar on the left, and a main content area on the right.

## Props

- `className` (optional): A string representing additional classes to be applied to the component.
- `sidebar` (optional): JSX to render in the sidebar area.
- `headerBar` (optional): JSX to render in the header bar area.
- `mainContent` (deprecated): JSX to render in the main content area. Use `children` instead.
- `children` (optional): JSX to render in the main content area.
- `data-cy` (optional): A string representing the data attribute `data-cy` used for testing.

## Usage

```jsx
const MyApp = () => {
  return (
    <AppChrome headerBar={<MyHeaderBar />} sidebar={<MySidebar />}>
      <MyMainContent />
    </AppChrome>
  );
};
```

`AppChrome` takes in several child components, including `headerBar`, `sidebar`, and `children`. These define the layout of the page. The `headerBar` and `sidebar` are optional and can be used as needed. The main content of the page should be passed as children to the `AppChrome` component.

## Styling

The `AppChrome` component can be customized by passing a `className` prop. The component also exports the `appChrome` and `appWrapper` styles for more advanced styling options.
