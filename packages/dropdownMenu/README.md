# DropdownMenu

A dropdown toggles an overlay menu of actions. It appears as a result of a user interacting with some trigger (usually a button or icon) to open the menu.

Dropdown menus can be opened and navigated via cursor and keyboard.

## DropdownMenu Triggers

By default, use one of the dropdown button components such as `PrimaryDropdownButton` as the dropdown trigger.

If you're not using a button as your dropdown trigger, be sure whatever you use looks like something the user is supposed to interact with and can convey dropdown capabilities.

## DropdownMenuItem

This component defines the individual child elements within the DropdownMenu.

### Icons and Avatars

Dropdown menu items can display an icon or avatar before or after the menu item text. By default, the avatar or icon is sized at `iconSizeXs`.

### Menu States

**Enabled:** By default, menu items are enabled and will trigger some action.

**Disabled:** Disable a menu item if it triggers an action that is not currently possible to execute, but could become enabled by an action the user can take. Show a tooltip if the user might require more information about why that menu item is disabled.

**Hidden:** Hide a menu item if there is no way a user can execute the action triggered by that menu item. If all menu items in a DropdownMenu are hidden, do not show the trigger that opens the menu when clicked.

## Best Practices

### Do

- Use concise language to improve scannability
- Use verbs for menu items that are actions

### Don't

- Use icons or avatars that are different sizes in the same dropdown section
- Use only icons or avatars as menu item content
- Make menu item content too long or complicated. The shorter and simpler, the better
- Use a dropdown menu in a form to replace a `<select>` dropdown, use the `SelectInput` component instead
- Hide critical actions in dropdowns
