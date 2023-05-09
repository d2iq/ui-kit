# Loading indicators

Loading indicators communicate that some action is in progress. They are displayed in place of content that cannot be shown until some data is loaded or some action is processed.

## When to Use a Loading Indicator

Loading indicators should be used to provide visual feedback that something is happening, but they should not hide available content. Use loading indicators only in place of content that cannot possibly be rendered until some action or request has been processed. For example, if a page has loaded everything except for the data required to render a table, we should not replace the entire screen with a loading indicator. Instead, we can show the page header and the app's chrome.

## Where to Display Loading Indicators

### Loading a Section

When an entire section of a page can't be displayed, use a SectionLoadingIndicator in place of the part of the screen that cannot be shown yet. This kind of loading indicator has a delay before it is shown, which is used to avoid showing too many loading indicators, improving perceived performance.

For example, use a SectionLoadingIndicator in place of a list of clusters until the API call to get cluster data has completed successfully.

### Loading Inline Content

When waiting for data to show a small part of a larger screen, use an InlineLoadingIndicator in place of the content that cannot be shown yet.

Avoid using the InlineLoadingIndicator in place of a button. If we're waiting for data before a user can interact with a button, disable the button and show a tooltip explaining why the button is disabled.

For example, use an InlineLoadingIndicator in place of a package version number until the API call to get the package data has completed successfully.

## Best Practices

### Do

- Show as much content as possible to avoid showing loading indicators too often.
- Avoid showing more than one SectionLoadingIndicator on the screen at once.

### Don't

- Use a loading indicator in place of images that have not downloaded yet.
- Rely on text to explain a loading state because it will disappear as soon as the content is loaded.
