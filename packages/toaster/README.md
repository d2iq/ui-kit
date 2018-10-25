# Toasts
Toasts should be used when you want to give the user feedback on an action that was taken or to alert the user of a status change.

## Messaging Tone
**Warning:** A warning message should be used when you want to warn a user of a potential hazard that could occur. The warning message should inform the user of what the issue is and how they can remediate it.

**Danger:** A danger message should be used when you want to alert a user of an issue that has occured. The danger message should inform the user of what the issue is and how they can remediate it.

**Success:** A success message should be used when you want to inform the user that an action they have taken was successful. The success message should inform the user of the action that was taken and provide them a way to see the object for which they took action on. 

## Icons
Icons must be used in Toast notifications as a way to distinguish between the type of message (i.e. warning, success, danger). 

## Displaying and Dismissing
All toasts can be manually dismissed by the users. Success toast notifications should automatically be dismissed after 2 seconds. Warning and Danger toast notifications can only be manually dismissed by the user.

You can show many toast notifications. However toasts cannot reach above the top header (i.e. Services header). 

## Actions
Can have up to two additional actions (primary action and a secondary action). For example: “Start Update” as a primary action and “Release Notes” as a secondary action.

## Links
The body text rendered from the content passed into the `description` prop can contain a link in the form of a hyperlink.

## Text
Be mindful of how much text is going into the notifications. Avoid having to use “...” at the end a sentence. If the text is too long for the notification, consider how you can shorten the text. A good notification will tell the user what happened in the system and what they can do about it. 

