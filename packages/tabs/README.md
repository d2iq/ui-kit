# Tabs Name

State of the Tabs is controlled with in the component.

Example Component:

```JS
const ExampleTabsComponent = ({selectedIndex}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setSelectedIndex({ selectedIndex });
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
  )

}
```

Under the hood we are using [react-tabs](https://github.com/reactjs/react-tabs)
