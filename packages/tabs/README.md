# Tabs

The `Tabs` component allows users to navigate between multiple panels of content within a single container. The component is controlled internally, meaning that the state of the selected tab is managed within the component itself.

The `Tabs` component is built on top of the [react-tabs](https://github.com/reactjs/react-tabs) library.

Example usage:

```jsx
import { useState } from "react";
import { Tabs, TabItem, TabTitle } from "./Tabs";

const ExampleTabsComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = index => {
    setSelectedIndex(index);
  };

  return (
    <Tabs selectedIndex={selectedIndex} onSelect={handleSelect}>
      <TabItem>
        <TabTitle>Tab 1 Title</TabTitle>
        First Tab Content
      </TabItem>
      <TabItem>
        <TabTitle>Tab 2 Title</TabTitle>
        Second Tab Content
      </TabItem>
    </Tabs>
  );
};
```

## Responsive Tabs

The tabs can be made responsive to toggle between vertical and horizontal orientation depending on the breakpoint reached.

For example, setting `direction: { large: "vert" }` will allow the `Tabs` to switch to a vertical orientation after reaching the large breakpoint (1200px).
