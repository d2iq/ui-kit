# Empty State Patterns

Effective empty states onboard and educate users, smooth out potentially frustrating moments, and build trust in our products.

There are a variety of reasons why a screen might be lacking content. If a screen does not have any content to display, users should not have to guess if something has gone wrong. Users should be informed about why content is missing, and be guided to the next step they need to take to get to an ideal state.

If a user has encountered an empty state, it's very possible that the user is experiencing some frustration. Be cautious about using copy or imagery that is "cute" or "charming"—it may come off as condescending instead of helpful.

## Types of empty states

### Clean slate

This state is most common when a user is new to the app and hasn't created any content yet. This state will also be encountered if the data has been intentionally deleted.

What to do

- Explain what content is normally displayed and how it's relevant to the rest of the app
- Guide users to the next step they can take to add content to this screen

### An error prevents data from loading

This kind of empty state happens when there is data, but nothing can be shown because something went wrong when the data was requested.

What to do

- Inform the user that the expected content could not be loaded because of an error
- Let the user know if there is some action they can take to resolve the error

### Insufficient permissions to access data

A page will not render content that a user is not authorized to see.

What to do

- Inform the user that they don't have access to the missing content
- Don't let this be a dead end. Guide the user to take some other action or view another screen.

## Loading content

Content may not be visible if there is a delay between the user requesting the data and the data getting rendered on screen. Performance should be prioritized so that users rarely (or never) have to wait for content to load, but loading states still need to be considered to provide a smooth and sturdy user experience.

A user should never have to guess whether content is not visible because it's still loading or if there is some other reason.

What to do

- Do not block unrelated content from being shown. Show as much content as possible while waiting for the full response
- If the delay is especially long and there is an estimate for how long it will take, share that time estimate with the user
- If a wait time is especially long because there are multiple steps that need to be taken, let users know what step they're on. If possible, inform the user how many more steps there are
- Show a loading indicator in place of the content being loaded

### When to show a loading indicator

To improve the perceived performance of our apps, don't let loading indicators hide available content. Loading indicators are only displayed in place of content that cannot possibly be rendered until some action or request has been processed.

#### Loading an entire screen or large sections of a screen

When an entire section of a page can't be displayed, show a loading indicator in place of the loading content.

Avoid showing more than one section-level loading indicator. Multiple sections in a "loading" state could hurt perceived performance by making the user feel like there are a lot of large chunks of data to wait for.

For example: if a page has loaded everything except for the data required to render a table, we should not replace the entire screen with a loading indicator. We can at least show the page header and the app's chrome.

#### Loading inline content

When waiting for data to show a small piece of data, show all of the loaded content and show a loading indicator in place of the content that is still being loaded. Inline loading indicators may optionally be shown with a label.

For example: showing a loading indicator labeled with "Fetching version..." in place of a package version number until the API call to get the package data.

#### Loading data needed to take an action

For information about how to handle interactive components (e.g.: a button) in a loading state, see [Interactive Component States](./interactive-element-states.md#loading).
