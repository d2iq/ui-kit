# Chart

Exposing [react-chartist](https://github.com/fraserxu/react-chartist)

## LineChart

The Linechart is rendering a single line on a graph based on provided data. the data is build up as a `key: value` object. The `key` is representing the label (e.g. a year) and the `value` is representing the datum (e.g. number of spacex launches) the component will generate a graph out of the information.

The LineChart is exposing the following props

```TS
{
  data: {
    [label: string]: number;
  };
  type: string;
}
```

And an implementation example looks like this:

```JSX
<LineChart
  data={{
    2006: 1,
    2007: 1,
    2008: 2,
    2009: 1,
    2010: 2,
    2012: 2,
    2013: 3,
    2014: 6,
    2015: 6,
    2016: 8,
    2017: 18,
    2018: 21,
    2019: 4
  }}
/>
```
