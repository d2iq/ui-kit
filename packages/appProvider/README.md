# AppProvider

App provider is a component that enables sharing configuration and settings throughout the entire application.

You should wrap the root of your application in this component:

```javascript
<AppProvider
  linkComponent={MyLinkComponent}
  theme={...}
>
```
