# InfoBox
InfoBox notifications are a way to notify users in the UI when something has happened and they need take to take action (e.g. a service is failing and needs attention).

## Types of InfoBox

### InfoBoxBanner
Should be used when a persistent system wide event has occurred that is very unusual and you want to grab the user’s attention. This should be used rarely.

Can be manually dismissed by the users.

Should only show one at a time.

### InfoBoxInline
Should be used when you want to inform the user of an event that has occurred within a particular part of the system.

Cannot be manually dismissed by the user.

Should show at max 2 at a time though ideally you would only want to show 1. If you are considering more than 3 `InfoBoxInline` notifications on the same page, consider how you could consolidate them into 2 or less.

## Messaging Tone
**Warning:** A warning message should be used when you want to warn a user of a potential hazard that could occur. The warning message should inform the user of what the issue is and how they can remediate it.

**Danger:** A danger message should be used when you want to alert a user of an issue that has occured. The danger message should inform the user of what the issue is and how they can remediate it.

**Success:** A success message should be used when you want to inform the user that an action they have taken was successful. The success message should inform the user of the action that was taken and provide them a way to see the object for which they took action on. 

**Info:** An info message should be used to inform the user of prerequisite material that is needed. 

## Actions
Can have up to two additional actions (primary action and a secondary action). For example: “Start Update” as a primary action and “Release Notes” as a secondary action

## Links
The body text rendered from the content passed into the `message` prop can contain a link in the form of a hyperlink. 

## Text
Be mindful of how much text is going into the notifications. Avoid having to use “...” at the end a sentence. If the text is too long for the notification, consider how you can shorten the text. A good notification will tell the user what happened in the system and what they can do about it.
