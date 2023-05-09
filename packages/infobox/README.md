# InfoBox

InfoBox notifications are used to notify users when something has happened and they need to take action. For example, a service is failing and needs attention.

## InfoBox Types

### InfoBoxBanner

Should be used when a persistent system-wide event has occurred that is very unusual and requires immediate attention. This should be used sparingly. It can be manually dismissed by the user. Ideally, there should only be one of these shown at a time to a user.

### InfoBoxInline

Use the `InfoBoxInline` component when you want to inform the user of an event that has occurred within a particular part of the system. These cannot be manually dismissed by the user.
Ideally only one should be displayed at a time, although two should be the upper limit. If you are considering more than 3 `InfoBoxInline` notifications on the same page, consider how you can consolidate them into 2 or fewer.

## Messaging

**Warning:** A warning message should be used when you want to alert a user to a potential hazard that could occur. The warning message should inform the user of what the issue is and how they can remedy it.

**Danger:** A danger message should be used when you want to alert a user of an issue that has occurred. The danger message should inform the user of what the issue is and how they can remedy it.

**Success:** A success message should be used when you want to inform the user that an action they have taken was successful. The success message should inform the user of the action that was taken and provide them with a way to see the object for which they took action.

**Info:** An info message should be used to inform the user. For example, information on prerequisite material that is needed.

## Actions

Actions are limited to two, a primary and secondary action. For example: "Start Update" as a primary action and "Release Notes" as a secondary action. They are styled the same.

## Links

The body text rendered from the content passed into the `message` prop can contain a hyperlink.

## Text

Be mindful of how much text is going into the notifications. Avoid using "..." at the end of a sentence. If the text is too long for the notification, consider how you can shorten it. A good notification will tell the user what happened in the system and what they can do about it.
