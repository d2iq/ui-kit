# Contributing

- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Creating a New Component](#creating-a-new-component)
    - [Does It Belong in UI Kit?](#does-it-belong-in-ui-kit)
      - [Consider the Following Before Adding a New Component](#consider-the-following-before-adding-a-new-component)
  - [Maintaining Reusable Components](#maintaining-reusable-components)
    - [Rigid vs. Flexible](#rigid-vs-flexible)
      - [Avoid Weak Elements](#avoid-weak-elements)
      - [Declare Prop Types](#declare-prop-types)
      - [Never Hard Code HTML ID’s](#never-hard-code-html-ids)
      - [Use Logical Defaults](#use-logical-defaults)
      - [Accessibility](#accessibility)
      - [Configuration Objects](#configuration-objects)
      - [Single Responsibility Principle](#single-responsibility-principle)
      - [Keep Components Simple](#keep-components-simple)
      - [Directory Structure](#directory-structure)
  - [Conventional Commits](#conventional-commits)
    - [Commit Types](#commit-types)
      - [Conventional Commit Types](#conventional-commit-types)

## Prerequisites

Git, Node (version ^16.0.0), and NPM(version >=7.0.0) should be setup.

UI Kit uses [React](https://reactjs.org/tutorial/tutorial.html) and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

## Getting Started

1.  Clone the repository and enter the directory.
2.  Run `npm install`.
3.  Start Storybook with `npm start`.

The web server should be started now at the address http://localhost:6006 which is hosting Storybook. This is our documentation from the local repository. Anything you change will reflect there directly.

After you're happy with your changes, create a commit by using `git commit` or using [git cz](http://commitizen.github.io/cz-cli/).

Finally, push and create a pull request 🎉

## Creating a New Component

To create a new component from within the repository you need to run:

```sh
npm run create:component -- ${Component Name}
```

### Does It Belong in UI Kit?

Before adding a new component to UI Kit, we need to carefully consider whether it belongs in UI Kit. If we're too quick to add new components to UI Kit, we will end up bloating our component library and spend too much time maintaining reusable components.

When a new component is being created, work with the design team to document design and usage guidelines in the component folder's README.md file.

#### Consider the Following Before Adding a New Component

**Is it likely this component be used in more than one app?**
For example, a component for a card that may contain any content would be a good candidate for ui-kit. A card that specifically renders data specific to an object in an app is not.

**Does it fit in with the "theme" of other components in the UI Kit?**
For example, if we have a toast and an inline alert box, a page banner would make sense to exist in the ui-kit.

**Is the effort that goes into building and maintaining it as a reusable component worth the payoff?**
For example, Table and it's related components are complex components to properly maintain, but it's such a heavily used pattern in our apps, that it's worth the effort.

**Will side effects of adding this component help us move the design system forward?**
For example, adding a toast component forces us to think about visual indication of alert status (error, success, warning, etc.), z-index stacking context, accessibility guidelines, and how we animate a piece of UI in and out of the viewport.

**Is now the right time to add this to UI Kit?**
If adding this component right now prevent us from working on more important work, maybe it should be built in your app's codebase, and we’ll follow-up about adding to UI Kit at the end of the release iteration.
If we can’t get this added to UI Kit in time for it to be used to resolve your feature/task/bug, build in it your app's codebase, and we’ll follow-up about adding to UI Kit at the end of the release iteration.

If you're not sure whether a component belongs in UI Kit, keep it in the app you're building.

## Maintaining Reusable Components

### Rigid vs. Flexible

Generally, a component should rather be rigid than flexible. That means that we rather create more components then creating one which has a high complexity. Although a flexible component has a higher rate of reusability in more contexts the complexity increases a lot more. Which is an easy way to introduce a lot of errors to a component, that is why we prefer to have rigid components. A rigid component is simple, easy to understand, easy to test, less code and also improves the consistency.

> It's always easy to add flexibility later, it's nearly impossible to remove flexibility.

> -- Random Person on the Internet

While creating a component think about one single reappearing use-case and create a component to solve that use-case. And do not try to think about a million use-cases which one component could handle. Fewer features mean more simplicity and consistency.

#### Avoid Weak Elements

Weak elements are elements which can’t nest block elements, for example, a `p` tag is not able to wrap around a div which will reduce the comparability of a component. This is why we try to use strong elements such as `section` or `div` instead of `p`.

#### Declare Prop Types

Since the `ui-kit` is using TypeScript please be sure to define proper prop types for components. This will improve the documentation and will provide better error messages for the users. This will also provide auto-completion in some IDE’s. Prop types should be precise, if possible, define object or array shapes including nested prop types.

In addition to describing props using TypeScript types, each prop should be described using a comment block detailing the prop and it's usage.

Example:

```
interface ComponentProps {
  /**
   * An array of objects that contain the data for each option.
   */
  options: Array<{
    disabled?: boolean,
    label: string,
    value: string
  }>;
  /**
   * A function that gets called when a new option is selected.
   */
  onChange?: (selectedOption: string) => void;
}
```

#### Never Hard Code HTML ID’s

If you need an id on an element, expose a prop for that so the user can define it based on the application.

#### Use Logical Defaults

Use prop defaults where reasonable, this will reduce the efforts required to adopt the component.

#### Accessibility

UI Kit components should be usable by as many users as possible.

We need to consider human factors when designing and building our apps.

| Some people can’t:            | ...so they'll need:        |
| ----------------------------- | -------------------------- |
| - Use a mouse                 | - Keyboard support         |
| - See low-contrast text       | - Highly readable text     |
| - See a screen at all         | - Screen reader support    |
| - Hear sounds                 | - Captions and transcripts |
| - Understand complex language | - Plain language           |

Accessibility and universal design are huge topics. If you want to learn more, [a11yproject.com](https://www.a11yproject.com/) is a great place to start.

#### Configuration Objects

Please consider using configuration objects as they will provide the user a lot of value by:

- improving consistency
- less typing needed
- less error prone

However, avoid using configuration Objects if you have 3 or fewer properties.

#### Single Responsibility Principle

Keep the components simple by applying them to a single responsibility. Avoid introducing unnecessary props. Each prop is a configuration that increases the complexity. Before adding a property to an existing component, ask yourself if this should be a new component instead.

#### Keep Components Simple

It's important to keep components as simple as possible, add logic to a component if it improves performance or quality of that component. For example, paginating a list if the number of items is exceeding a certain amount or having a show toggle to show more content like a dropdown.

#### Directory Structure

Each component has a directory in `packages/`.

Start with a flat directory. If a component becomes complex and has a lot of files, add directories like `components`, `tests`, and `stories` if they add clarity.

```
packages
└── <ComponentGroup>
    ├── README.md
    ├── components
    │   └── <Component>.tsx
    ├── index.ts
    ├── stories
    │   └── <ComponentGroup>.stories.tsx
    ├── style.ts
    └── tests
        └── <Component>.test.tsx
```

## Conventional Commits

We use conventional commits with Angular preset.

### Commit Types

#### Conventional Commit Types

- **Features**
  `feat` - A new feature (triggers a major release).
- **Bug Fixes**
  `fix` - A bug fix (triggers a minor release).
- **Documentation**
  `docs` - Documentation only changes.
- **Styles**
  `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **Code Refactoring**
  `refactor` - A code change that neither fixes a bug nor adds a feature.
- **Performance Improvements**
  `perf` - A code change that improves performance (triggers a release).
- **Tests**
  `test` - Adding missing tests or correcting existing tests.
- **Builds**
  `build` - Changes that affect the build system or external dependencies.
- **Continuous Integrations**
  `ci` - Changes to our CI configuration files and scripts.
- **Chores**
  `chore` - Changes that don't modify src or test files.
- **Reverts**
  `revert` - When reverting a previous commit.

Examples Commit message:

```
fix: fix foo to enable bar

The commit body can be used to further detail changes.

BREAKING CHANGE:
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```
