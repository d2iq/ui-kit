# Interactive Component States

States communicate the different statuses of UI components to the user, including permission, availability, and interactivity. Different states of components are primarily distinguished by different visual representations of the component to provide clear affordances to the user regarding the current status.

## Common interaction subjects

- Actions
  - For example: buttons
- Selectable items
  - For example: items in a list of selectable options
- Data inputs
  - For example: a text input

## States

### Disabled

Use a disabled state when a component cannot be selected or interacted with, but there is something that can be done by the current user to enable the component.

It should be obvious that something is disabled before a user tries to interact with it.

Disabled components should not provide any feedback when they're clicked.

Disabled components should not be keyboard-navigable unless a tooltip is displayed when the disabled component is focus.

#### When to disable a component

An interactive component should be disabled when:

- there is something a user can do in their current session to enable the component. For exapmle: disabling a button to add items to a list when a user has reached the maximum number of items. The button would become enabled after one or more existing items are removed.
- something in progress needs to be completed before the component can be enabled. For example: disabling a submit button until the backend has sent an error or success response.
- the component becomes disabled based on something else in the app state. For example: an "Edit" button is disabled until the backend has sent a response affirming that the subject is ready to be edited.
- hiding the component might confuse users, or the user might have a strong expectation to execute that action. For example: if we have a list of items with dropdown menus, it could be confusing to hide a dropdown menu option in some of the items, but show it in others.
- we want to show that a feature that is on a product's roadmap. For example: disabling a button to select a cloud provider we don't support yet, but we want users to know that we plan to support it in the future.

#### Make it clear why something is disabled

If a component is disabled but still visible, don't force users to interpret why the component is disabled. Provide contextual information to explain why the component cannot be interacted with.

Suggested patterns:

- displaying instruction text below the section's nearest header
- displaying an explanation as caption text near the disabled component
- displaying tooltip when hovering or focusing the disabled component

### Hovered/Focused

TBD

### Active/Selected

TBD

### Loading

TBD

### Read-only

TBD

### Hidden

Hiding components is appropriate when a user does not have permission nor expectation to view and interact with specific content. Hiding such components improves security and reduces visual clutter on the page and the cognitive load on a user because there is less information to process.

#### When to hide a component:

- it meets all of the following criteria. For example: hiding a "Create" button when a user does not have permission to create that type of object.
  - cannot be selected or interacted with
  - there is nothing a user can do to enable the component
  - the user has no expectation that they should be able to interact with that component
- the component toggles a menu of options where all options are hidden
