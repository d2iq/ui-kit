# ConfigurationMap

The ConfigurationMap component renders a two column table like representation of a object which is a `key: value` form.
The specific props interface is:
```ts
interface ConfigurationMapProps {
  data: { [key: string]: string | number };
}
```

A simplified implementation example:

```jsx
<ConfigurationMap data={{ id: "foobar", cmd: "sleep 100;", cpu: 1 }} />
```