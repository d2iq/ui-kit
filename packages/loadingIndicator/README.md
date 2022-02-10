# Loading indicators

Loading indicators communicate that some action is in progress. They are displayed in place of content that cannot be shown until some data is loaded or some action is processed.

## When to show a loading indicator

To helped improve the perceived performance of our apps, don't let loading indicators hide available content. Loading indicators are only displayed in place of content that cannot possibly be rendered until some action or request has been processed.

For example: if a page has loaded everything except for the data required to render a table, we should not replace the entire screen with a loading indicator. We can at least show the page header and the app's chrome.

## Where to show a loading indicator

### Loading an entire section of a screen

When an entire section of a page can't be displayed, use a `SectionLoadingIndicator` in place of the part of the screen that cannot be shown yet. This kind of loading indicator has a delay before it is shown. The delay is used to avoid showing too many loading indicators, which should improve perceived performance.

For example: showing a loading indicator in place of a list of clusters until the API call to get cluster data has completed successfully.

### Loading inline content

When waiting for data to show a small part of a larger screen, use an `InlineLoadingIndicator` in place of the content that cannot be shown yet.

Avoid using this component in place of a button. If we're waiting for data before a user can interact with a button, disable the button and show a tooltip explaning why that button is disabled.

For example: showing a loading indicator in place of a package version number until the API call to get the package data.

## Do's and Dont's

### Do

- Show as much content as possible to avoid showing loading indicators too often
- Avoid showing more than one `SectionLoadingIndicator` on the screen at once

### Don't

- Use a loading indicator in place of images that have not downloaded yet
- Rely on text to explain a loading state because it will disappear as soon as the content is loaded
