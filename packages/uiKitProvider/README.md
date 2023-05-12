# UIKitProvider

The `UIKitProvider` is a component that enables sharing configuration and settings throughout the entire application such as theming. You should wrap the root of your application in this component:

```jsx
<UIKitProvider
  linkComponent={MyLinkComponent}
  theme={...}
>
  <App />
</UIKitProvider>
```
