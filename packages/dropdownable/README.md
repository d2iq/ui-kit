# Dropdownable

The `Dropdownable` is a component that can be used as a util to add dropdown functionality to other components.

The Dropdownable component allows for the creation of a dropdown menu. It renders its children and an optional dropdown overlay relative to them. Unlike a select list, multiselect, or combo box, it does not prescribe any particular overlay style or content. Dropdownable simply facilitates a dropdownable UI.

## Display Behavior

The dropdown contents are eagerly added to the DOM off-screen and repositioned relative to the Dropdownable children when opened. The dropdown contents are dismissed when the user clicks outside the dropdown.

The Dropdownable component is built using the usePopper hook from the react-popper library, which manages the positioning of the dropdown contents relative to the children.
