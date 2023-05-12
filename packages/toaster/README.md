# Toasts

Toasts are used to provide feedback to the user on an action taken or to alert them of a status change.

The `Toast` component is a single toast message that is displayed to the user, while the `Toaster` component is a container that holds multiple Toast components and handles their rendering and dismissal. The Toaster component manages the lifecycle of the Toast components, handling their dismissal after a certain amount of time or when the user dismisses them manually.

## Messaging

Toasts can be categorized as follows:

**Warning:** Use a warning message to alert users of a potential hazard that could occur. The message should explain the issue and provide instructions on how to remedy it.

**Danger:** Use a danger message to notify users of an issue that has occurred. The message should explain the problem and provide instructions on how to remedy it.

**Success:** Use a success message to inform users that an action they took was successful. The message should explain the action taken and provide users with a way to view the object on which they took action.

## Icons

Icons should be used in toast notifications to distinguish between message types (warning, success, danger).

## Displaying and Dismissing

All toasts can be manually dismissed by the user. Success toast notifications should automatically dismiss after 2 seconds. Warning and danger toast notifications must be dismissed manually by the user.

Multiple toast notifications can be displayed, but they should not stack beyond the page header.

## Actions

Toasts can have up to two additional actions, a primary action and a secondary action. For example, a toast might have a "Start Update" button as the primary action and a "View Documentation" button as a secondary action.

## Links

The body text of the notification, rendered from the content passed into the `description` prop, can either be a string or contain elements such as a Link component.

## Text

Be mindful of the amount of text included in the notification. Avoid using ellipses at the end of sentences. If the text is too long for the notification, consider shortening it. A good notification should inform the user what happened in the system and what they can do about it.
