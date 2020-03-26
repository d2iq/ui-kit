# Typography components

Components for our design system's typography

## Composition

Most of our apps are for monitoring and managing data, where text is meant to be quickly scanned. Most of our typographic styles are optimized for short and efficient bits of text.

### TextBlock

In rare cases we have long blocks of text; for example, the package detail page. The `TextBlock` component can be used to make long blocks of text appear clean and readable.

## Text Styles

### Text

The base typography component. When used without any props, it renders like our default/body text style

### HeadingText1

Our "loudest" heading. Used for text at the highest level of hierarchy, or used to treat typography like imagery. Sometimes referred to by designers as "display type"

### HeadingText2

A large and "loud" heading, but a level of hierarchy below `HeadingText1`. Commonly used for page titles or major section headings

### HeadingText3

Our quietest heading. It stands out more than body text, but is used to label things with a lower level of hierarchy

### CaptionText

Used for caption text or hint text for a form field. Typically used for text that isn't mandatory for a user to read in order to successfully accomplish a task

### DangerText

Used for text that is communicating something is wrong. Typically used for things like errors

### WarningText

Used for text that is warning a user of a potential hazard that could occur. Used for cases that aren't serious enough for `DangerText`

### SuccessText

Used for text that informs the user that something is in a optimal state, or an action they have taken was successful

### MonospaceText

Changes text to be in a monospace font. Used for things like keys, values, or blocks of code

### SmallText

It's exactly what it sounds like - just smaller text
