# Avatar

An Avatar is a thumbnail image representation of an entity.

## Accessibility

Using a `label` would be redundant if there is already text near the `Avatar` that describes what it is. For example, a card for Kubernetes in a service catalog will have an `Avatar` with the Kubernetes logo and the text "Kubernetes" right next to it. In this case, it is not necessary to provide a `label` for the Avatar, as the screen reader would read out "Kubernetes" twice, which would be redundant. However, if the `Avatar` is being used in a context where there is no other text to identify it, then a `label` should be provided for accessibility purposes.
