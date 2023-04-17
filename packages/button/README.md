# Buttons

Buttons are used for action items. Some examples include Create, Save, Delete. Buttons make it obvious to the user that they can take an action.

Do not use buttons as navigational elements. Instead, use anchors because it takes the user to a new page and is not associated with an action.

Each page will likely have one primary button. Any remaining calls-to-action are represented as secondary buttons.

## Button states and types

### Types

**Primary**: Primary call to action button. Should stand out above all other actions. Do not put two primary buttons next to each other. Examples include Save, Deploy.

**Secondary**: Most buttons on a page are likely this style.

**Warning**: Warning buttons are used to advise caution.

**Danger**: Destructive buttons are used to highlight something dangerous that can't be undone e.g. "Delete".

**Icon only**: Use when an icon is enough to represent the action e.g. "Create a Service". Should be accompanied by a tooltip.

**Icon with label**: If there is space and we feel an icon by itself is not obvious enough e.g. "Kill Task"

### States

**Disabled**: Disable a button when the action is not applicable but we want to show the user that it may be possible. Disabled buttons should have a tooltip.

**Processing**: When user clicks or taps a button and an API request is initiated we should provide feedback so they know their action was received.

**Hidden:** Hide a button when there is no way a user can interact with the button.

## Using buttons as links

Sometimes there is a button that is actually a link to somewhere else. If the appropriate props are set, the button is rendered as an anchor tag, but it is styled like a button.

It is not recommended to use a button as a link when it triggers a dropdown. It would be frustrating if a user clicked a button and expected to see a dropdown appear, but they are taken to a new page.

## Button content

Button labels tell users what will happen when they click the button. Use verbs that describe the action. Acceptable labels include:

- New \$object
- Create \$object
- Edit \$object
- Save \$object
- Delete \$object
- Deploy, Scale, Restart

Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words for button labels.

For Sets of Buttons, use specific labels, such as Save or Cancel, instead of using Yes and No. This is particularly helpful when the user is confirming an action.

## ResetButton

A `ResetButton` component is essentially an unstyled HTML `<button>` element. It can be used for an element that is semantically a button, but is not intended to look like a button.

## Feedback

Buttons should have hover, active, focus, disabled states.

When a user interacts with a button, either via click or tap, and an action is being completed, e.g. an API call, the button should change to disabled and provide feedback via the label to the user that it received the interaction and is busy performing the action e.g. “Saving…”

## Tooltips

Buttons may or may not require tooltips to help communicate their intent.

Icon buttons that do not have labels should always have a tooltip so the user knows what will happen when they click it.

Disabled buttons should always have a tooltip to explain why it is disabled so the user is aware.
