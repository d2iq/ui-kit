# Tabs Name

State of the Tabs is controlled with in the component.

Example Component:

```JS
class Example extends React.Component<{}, Partial<{ selectedIndex: number }>> {
  state = { selectedIndex: 0 };
  handleSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };
  render() {
    const { selectedIndex } = this.state;
    return (
      <Tabs selectedIndex={selectedIndex} onSelect={this.handleSelect}>
        <TabItem>
          <TabTitle>Tab 1 Name</TabTitle>
          First tab Content
        </TabItem>
        <TabItem>
          <TabTitle>Tab 2 Name</TabTitle>
          Second Tab Content
        </TabItem>
      </Tabs>
    );
  }
}
```

Under the hood we are using [react-tabs](https://github.com/reactjs/react-tabs)
