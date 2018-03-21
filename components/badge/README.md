# Badges

Badges are a lightweight method of annotating or labeling content. Wrap content in the `.badge` class to add an inline badge. The font-size and line-height of a badge inherit from that of it's parent's properties.

```
<span class="badge">
  Badge
</span>
```

Badge States

You may wish to display more than the single badge type, either to create separation in the importance of various actions or to communicate the state of an action or form.  badge states make this super easy.

```
<!-- badge: Default -->
<span class="badge">
  Default
</span>

<!-- badge: Success -->
<span class="badge badge-success">
  Success
</span>

<!-- badge: Info -->
<span class="badge badge-info">
  Info
</span>

<!-- badge: Warning -->
<span class="badge badge-warning">
  Warning
</span>

<!-- badge: Danger -->
<span class="badge badge-danger">
  Danger
</span>
```

# Rounded Badge

Add the class `.badge-rounded` to any `.badge` element to display it with rounded caps.

```
<!-- badge: Default -->
<span class="badge badge-rounded">
  Default
</span>
```
