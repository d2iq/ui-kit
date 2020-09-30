# RadioInput

`RadioInputs` are grouped as one field to let a user select a single value from a list of options. Unlike a `SelectInput`, all of the options are visible without opening a dropdown.

## Do's and Dont's

### DO:

- Limit the number of radio inputs in a group to 12 or fewer inputs. If you find yourself needing more than 12 radio inputs, consider using a `SelectInput` instead.
- Clearly label radio inputs

### DON'T:

- Use a single radio input to accept data input
- Use an indeterminate state (neither true or false) on a radio input
- Use a horizontal layout for a group of radio buttons that has a lot of text or a lot of options
