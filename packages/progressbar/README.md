# ProgressBar

A ProgressBar is a linear chart that can be used used to show parts of a whole or to represent the completion of a task.

## Text content

### Caption

Sometimes a ProgressBar requires a text caption to show what data it's measuring. A caption is only needed if the ProgressBar is lacking context in the UI. For example, a progress bar would not need a caption if it's in a table column that has a labeled header.

By default, this text should appear above the ProgressBar on the right side. This is where the text appears when it's passed to the `caption` prop.

### Value

If it's important that users know the exact value of what's being measured, it's best to include text that shows exactly what the value is. For example, if I have a chart that's showing 45% of some total, I should display "45%" near the chart.

By default, this text should appear above the ProgressBar on the right side. This is where the text appears when it's passed to the `value` prop.

See the "Segments" section below for info on how to show exact values for multiple segments.

## Segments

A ProgressBar can render segments of the parts of a whole using different colored fills.

### Segment Legend

When using a ProgressBar contains multiple segments of data that users need exact values for, include a segment legend. By default, use the `ProgressBarSegmentLegend` component for this.

## Processing

When a progress bar is showing data that's still being processed, it is given a visual treatment to convey to the user that something is in progress.

## Condensed layout

When the progress bar is being rendered somewhere with limited vertical space (for example: in a table row), set the `isCondensedLayout` prop to true. The condensed layout keeps the progress bar to a single line of content and hides the caption.

## Do's and Don'ts

### Do

- Use a legend to label segment colors when there is more than one piece of data being displayed
- Use captions and labels for clarity when the chart data lacks context
- Try to keep the color of the progress bar consistent with any colors used to represent that particular piece of data in other parts of the app

### Don't

- Use colors that are too similar if you're rendering multiple segments
- Use a ProgressBar to indicate a view is loading
- Use a ProgressBar if you're comparing many pieces of data - it can get visually busy and difficult to comprehend
