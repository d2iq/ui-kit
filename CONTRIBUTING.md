# Contributing

- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Creating a New Component](#creating-a-new-component)
    - [Does It Belong in UI Kit?](#does-it-belong-in-ui-kit)
    - [Eliminate React Errors and Warnings](#eliminate-react-errors-and-warnings)
  - [Maintaining Reusable Components](#maintaining-reusable-components)
    - [Rigid vs. Flexible](rigid-vs-flexible)
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
    - [Commit types](#commit-types)
    - [JIRA Integration](#jira-integration)

## Prerequisites

We expect the user to be able to handle:

- git
- node
- npm

We expect a entry level of react knowledge, if you know these terms in a React context you are well prepared:

- Component

Also [here](https://reactjs.org/tutorial/tutorial.html) you can find a thorough introduction to react.

We are using TypeScript which is a superset of JavaScript, you can get introduction [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Getting Started

1.  Clone the repository and enter the directory.
2.  run `npm install` and `npm run setup:git-hooks`
3.  Start storybook with `npm start` if everything is good you should see:

```bash
> @dcos/ui-kit@0.2.0 start <ui-kit-local-path>
> NODE_ENV=development npm run storybook --root ./


> @dcos/ui-kit@0.2.0 storybook <ui-kit-local-path>
> start-storybook -p 6006 "./"

info @storybook/react v<version>

info => Loading custom addons config.
info => Loading custom webpack config (full-control mode).
webpack built f3681fb30ce3064a6336 in <number>ms
info Storybook started on => http://localhost:6006/
info
```

After this there is a web server started at the address http://localhost:6006 which is hosting storybook. This is our documentation from the local repository. Anything you change will reflect there directly.

After you're happy with your channges, create a commit by using `git commit` or using [git cz](http://commitizen.github.io/cz-cli/).

Finally, push and create a pull request 🎉

## Creating a New Component

To create a new component from within the repository you need to run

```sh
npm run create:component -- ${Component Name}
```

### Does It Belong in UI Kit?

Before adding a new component to UI Kit, we need to carefully consider whether it belongs in UI Kit. If we're too quick to add new components to UI Kit, we will end up bloating our component library and spend too much time maintaining reusable components.

When a new component is being created, work with the design team to document design and usage guidelines in the component folder's README.md file.

#### Consider the Following Before Adding a New Component

**Is it likely this component be used in more than 1 app?**
For example, a component for a card that may contain any content would be a good candidate for ui-kit. A card that specifically renders data specific to an object in an napp is not.

**Does it fit in with a "theme" of other components in the UI Kit?**
For example, if we have a toast and an inline alert box, a page banner would make sense to exist in the ui-kit

**Is the effort that goes into building and maintaining it as a reusable component worth the payoff?**
For example, Table and it's related components are complex components to properly maintain, but it's such a heavily used pattern in our apps, that it's worth the effort

**Will side effects of adding this component help us move the design system forward?**
For example, adding a toast component forces us to think about visual indication of alert status (error, success, warning, etc.), z-index stacking context, accessibility guidelines, and how we animate a piece of UI in and out of the viewport.

**Is now the right time to add this to UI Kit?**
If adding this component right now prevent us from working on more important work, maybe it should be built in your app's codebase, and we’ll follow-up about adding to UI Kit at the end of the release iteration.
If we can’t get this added to UI Kit in time for it to be used to resolve your feature/task/bug, build in it your app's codebase, and we’ll follow-up about adding to UI Kit at the end of the release iteration.

If you're not sure whether a component belongs in UI Kit, keep it in the app you're building.

### Eliminate React Errors and Warnings

We don't want our components to create noise in the console for other apps that use ui-kit. We've added Cypress to test for React errors/warnings and fail in CI if any are found.

When creating a new component, add a test to `cypress/integration/storybook-cy.js` to check for errors and warnings.

#### Running Cypress

Using the Cypress UI:

1. `npm start`
2. `npx cypress open`
3. Click "storybook-cy" in the sidebar of the Cypress ui

In the CLI:
`npm run test:integration`

## Maintaining Reusable Components

### Rigid vs. Flexible

Generally, a component should rather be rigid than flexible. That means that we rather create more components then creating one which has a high complexity. Although a flexible component has a higher rate of reusability in more contexts the complexity increases a lot more. Which is an easy way to introduce a lot of errors to a component, that is why we prefer to have rigid components. A rigid component is simple, easy to understand, easy to test, less code and also improves the consistency.

> It's always easy to add flexibility later, it's nearly impossible to remove flexibility.

> -- Random Person on the Internet

While creating a component think about one single reappearing use-case and create a component to solve that use-case. And do not try to think about a million use-cases which one component could handle. Fewer features mean more simplicity and consistency.

#### Avoid Weak Elements

Weak elements are elements which can’t nest block elements, for example, a `p` tag is not able to wrap around a div which will reduce the comparability of a component. This is why we try to rather use a strong element like `section` or `div` instead of `p`.

#### Declare Prop Types

Since the `ui-kit` is using typescript please make sure to define proper prop types for your components. This will improve the documentation, which creates dynamically and will provide better error messages for the users. And also this will provide auto-completion in some IDE’s. Prop type should be as precise as possible—so also define object shapes or array shapes.

In addition to describing props using Typescript types, each prop should be described using a comment block about the prop.

For example:

```jsx
interface ComponentProps {
  /**
   * An array of objects that contain the data for each option
   */
  options: Array<{
    disabled?: boolean,
    label: string,
    value: string
  }>;
  /**
   * A function that gets called when a new option is selected
   */
  onChange?: (selectedOption: string) => void;
}
```

#### Never Hard Code HTML ID’s

This might conflict at some point. If you need an id on the element expose a prop for that so the user can define it based on the application.

#### Use Logical Defaults

Use prop defaults which make sense this will reduce the efforts needed to adopt this component.

#### Accessibility

UI Kit components should be usable by as many users as possible.

We can't assume how our customers use their computer. We need to consider human factors when designing and building our apps.

| Some people can’t:            | ...so they'll need:        |
| ----------------------------- | -------------------------- |
| - Use a mouse                 | - Keyboard support         |
| - See low-contrast text       | - Highly readable text     |
| - See a screen at all         | - Screenreader support     |
| - Hear sounds                 | - Captions and transcripts |
| - Understand complex language | - Plain language           |

Accessibility and universal design are huge topics. If you want to learn more, [a11yproject.com](https://www.a11yproject.com/) is a great place to start.

#### Configuration Objects

Please consider using configuration objects as they will provide the user a lot of value by

- consistency
- less typing needed
- less error prone

But please avoid using configuration Objects if you have 3 or fewer properties.

#### Single Responsibility Principle

Keep the components simple by applying them to a single responsibility. In that way, the component will stay simple in most cases. Try not to introduce unnecessary props. Each prop is a configuration which will automatically increase the complexity. Before adding a property to an existing component ask yourself if this could be a new component.

#### Keep Components Simple

It's important to keep components as simple as possible, add logic to a component if it improves performance or quality of that component. For example, paginating a list if the number of items is exceeding a certain amount or having a show toggle to show more content like a dropout.

#### Directory Structure

Each component has a directory in `packages/`.

Start with a flat directory. Then, if a component gets complex and has a lot of files, add directories like `components`, `tests`, and `stories` if they add clarity.

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

### Commit types

We are supporting the conventional commit types as follows:

- **Features**
  `feat` - A new feature (triggers a release)
- **Bug Fixes**
  `fix` - A bug fix (triggers a release)
- **Documentation**
  `docs` - Documentation only changes
- **Styles**
  `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **Code Refactoring**
  `refactor` - A code change that neither fixes a bug nor adds a feature
- **Performance Improvements**
  `perf` - A code change that improves performance (triggers a release)
- **Tests**
  `test` - Adding missing tests or correcting existing tests
- **Builds**
  `build` - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **Continuous Integrations**
  `ci` - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **Chores**
  `chore` - Other changes that don't modify src or test files
- **Reverts**
  `revert` - Reverts a previous commit

### JIRA Integration

`semantic-release-jira` plugin automaticallly can update your Mesosphere JIRA issues labels with UI-Kit release version, if you add it as footer to your commit message.

You can use `Updates`, `Closes` or `Resolves` statements (they all have the same effect tho) and add multiple JIRAs by seprarating them by comma.

Examples Commit message:

```
fix(Table): fix lorem so that it enables foo

this commit body message describes the commit

BREAKING CHANGE
Before this fix foo wasnt enabled at all, behavior changes from <old> to <new>

Closes DCOS_OSS-12345, Closes DCOS-23456
```
