# Avatar

An Avatar is a thumbnail image representation of an entity, typically a software package.

## Accessibility

Using a `label` would be redundant if there is already text near the Avatar that says what it is.

For example: a card for Kubernetes in a service catalog will have an Avatar with the Kubernetes logo, and the text "Kubernetes" right near it. The screenreader would read out "Kubernetes" twice, which would be a weird way to describe that piece of UI.
