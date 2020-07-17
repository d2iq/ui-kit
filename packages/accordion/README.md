# Accordion

The `Accordion` component is a collection of headings that can be clicked to hide and show related content.

The `Accordion` is used to save vertical space when when rendering a lot of content, while still letting the user scan headings to help them find the specific content they're looking for.

## Clickable headings

Each heading acts as a summary for the content that appears when the heading is clicked.

### Interactive elements in headings

In rare cases, the user may want to access actions or other interactive components without expanding a section. For these cases, the clickable headings support interactive elements such as buttons and form inputs. Clickable headings should contain no more than 3 interactive elements.

## Expandable content

The content in each section should be related to it's respective clickable heading. There are no rules about what the content can be, just keep in mind the content of each section will be hidden until the user expands the section.

### Multiple expanded sections vs single expanded section

By default, only one section may be expanded at a time. However, the accordion component supports multiple sections open at once. This could be used if collapsible sections contain information that a user may need to reference in another section.
