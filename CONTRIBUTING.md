# Contributing

- [Contributing](#contributing)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
  - [Creating a new Component](#creating-a-new-component)
    - [Rigid VS. Flexible](#rigid-vs-flexible)
    - [Introducing 3rd Party Components](#introducing-3rd-party-components)
    - [Moving A Component From `dcos/dcos-ui` To The `ui-kit`](#moving-a-component-from-dcos-dcos-ui-to-the-ui-kit)
    - [Creating a Reusable Component](#creating-a-reusable-component)
      - [Avoid Weak Elements](#avoid-weak-elements)
      - [Declare Prop Types](#declare-prop-types)
      - [Never hard code HTML ID’s](#never-hard-code-html-ids)
      - [Use Logical Defaults](#use-logical-defaults)
      - [A11y Support](#a11y-support)
      - [Configuration Objects](#configuration-objects)
      - [Single Responsibility Principle](#single-responsibility-principle)
      - [Keep Components Simple](#keep-components-simple)
      - [Directory Structure](#directory-structure)
  - [Atomic Design](#atomic-design)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
  - [Conventional Commits](#contenvtional-commits)
    - [Commit types](#commit-types)
    - [JIRA Integration](#jira-integration)

## Prerequisites

We expect the user to be able to handle:

* git
* node
* npm

We expect a entry level of react knowledge, if you know these terms in a react context you are well prepared:

* Component

Also [here](https://reactjs.org/tutorial/tutorial.html) you can find a thorough introduction to react.

We are using TypeScript which is a superset of JavaScript, you can get introduction [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Getting started

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

Change what you want to change. After you are happy with the changes you want to run `npm test` and `npm run lint`.

<!--
TODO: add formating script
-->

If nothing breaks create a commit by using git commit or using [git cz](http://commitizen.github.io/cz-cli/).

Push and create a pull request.

You did right now your first contribution to the ui-kit, thank you.

## Creating a new Component

To create a new component from within the repository you need to run

```sh
npm run create:component -- ${Component Name}
```

But apart from adding a new component, there are some guidelines which we want to follow.

While creating a new component there are a couple of steps everyone should think about before releasing a new component. This is important because once we released a component and it already got adopted it's rather difficult to remove or change the functionality of a component.

### Rigid VS. Flexible

Generally, a component should rather be rigid than flexible. That means that we rather create more components then creating one which has a high complexity. Although a flexible component has a higher rate of reusability in more contexts the complexity increases a lot more. Which is an easy way to introduce a lot of errors to a component, that is why we prefer to have rigid components. A rigid component is simple, easy to understand, easy to test, less code and also improves the consistency.

> It's always easy to add flexibility later, it's nearly impossible to remove flexibility.

> -- Random Person on the Internet

While creating a component think about one single reappearing use-case and create a component to solve that use-case. And do not try to think about a million use-cases which one component could handle. Fewer features mean more simplicity and consistency.

### Introducing 3rd Party Components

There are 3 ways to introduce 3rd party components to the `UI-kit`

* Link  
  We add a link to that component to the documentation. This is not a favorable way.
* Wrap  
  We are creating our own component but in that component we are utilising a 3rd party component, this solution is the favourable solution for the `UI-kit` as with that solution we are adding consistency to the 3rd party components and there is a single point to change the usage of that component if we decide to update the component or replace the component with our own implementation or the other implementation.
* Fork  
   We should do that as a last resort if we do not see any other solution.

<!--
TODO: add step by step guide for forking.
- Key decisions needed
    - we forking repositories into the UI-kit or are we creating a new repository within `dcos-labs`.
-->

Going from link via wrap to fork increases the control over component but also increases the effort need to update the component. A wrap is a sweet spot between consistency and functionality vs control and effort.

### Moving A Component From `dcos/dcos-ui` To The `ui-kit`

There will be often a chance when you create a component in `DCOS-ui` which is a good candidate for the ui-kit, but before moving it over to the ui-kit move it to the `candidate` directory in `dcos/dcos-ui` on a regular basis we are going to check usage of components in the `candidate` directory. In that way, we have a good overview of candidate components for the ui-kit.

> Rule of Three:  
> Try a component in three different places before placing it into ui-kit

### Eliminate React errors/warnings
We don't want our components to create noise in the console for other apps that use ui-kit. We've added Cypress to test for React errors/warnings and fail in CI if any are found.

When creating a new component, add a test to `cypress/integration/storybook-cy.js` to check for errors and warnings.

#### Running Cypress
1. `npm start`
2. `npx cypress open`
3. Click "storybook-cy" in the sidebar of the Cypress ui

### Creating a Reusable Component

#### Avoid Weak Elements

Weak elements are elements which can’t nest block elements, for example, a `p` tag is not able to wrap around a div which will reduce the comparability of a component. This is why we try to rather use a strong element like `section` or `div` instead of `p`.

#### Declare Prop Types

Since the `ui-kit` is using typescript please make sure to define proper prop types for your components. This will improve the documentation, which creates dynamically and will provide better error messages for the users. And also this will provide auto-completion in some IDE’s. Describe the props as good as possible, so also define object shapes or array shapes.

#### Never hard code HTML ID’s

This might conflict at some point. If you need an id on the element expose a prop for that so the user can define it based on the application.

#### Use Logical Defaults

Use prop defaults which make sense this will reduce the efforts needed to adopt this component.

#### A11y Support

A good start on that topic is to read [this website](https://a11yproject.com/)
While creating your component think about users: - Which uses keyboards - expose tab indexes as props - Use semantic correct HTML - ARIA

#### Configuration Objects

Please consider using configuration objects as they will provide the user a lot of value by

* consistency
* less typing needed
* less error prone

But please avoid using configuration Objects if you have 3 or fewer properties.

#### Single Responsibility Principle

Keep the components simple by applying them to a single responsibility. In that way, the component will stay simple in most cases. Try not to introduce unnecessary props. Each prop is a configuration which will automatically increase the complexity. Before adding a property to an existing component ask yourself if this could be a new component.

#### Keep Components Simple

It's important to keep components as simple as possible, add logic to a component if it improves performance or quality of that component. For example, paginating a list if the number of items is exceeding a certain amount or having a show toggle to show more content like a dropout.

#### Directory Structure

Components get grouped into `packages`. The Strucutre looks like this:

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

## Atomic Design

Atomic design is the principle we are trying to follow while we create components. More information on the principle is available at [atomicdesign.bradfrost.com](http://atomicdesign.bradfrost.com/)

### Atoms

Atoms are the smallest building blocks and the form the foundation of the library. Atoms get composed together with other atoms to create a molecule.
Some best practices here are:

* Honour the native API’s, for example, if you define a prop for `tabIndex` call it `tabIndex` instead of `tabindex` or `indexOfTabs`. This will improve consistency.
* Pass props via spread, if you need to pass props to a component using the spread operator like this `<input type="password" {...this.props} />`
* Use spread with destructing, use the destruct to remove props which you do not want to pass and then use spread to pass the props to the component.
  ```JS
  ({value, ...props}) => (<button {...props}>{value}</button>)
  ```
  * Do not scare away to create formatting components like MiB for adding MiB to a number `<MiB>1024</MiB> => 1024 MiB`

Naming an atom we use plurals instead of a suffix so it should rather be users then userList.

An Example of an Atom could be a `TextInput` component which basically provides an input field.

### Molecules

> Atoms get composed together creating Simple Functional Reusable Components.

Molecules are the next level component type after atoms. They're made up of atoms and they should still have one purpose and do that one well. By including atoms the molecule does not need to expose all the properties of the atoms, but the ones necessary to build the molecule. The purpose of this is to increase the consistency of dcos-ui which is the main use case for the ui-kit.

> For instance, water molecules and hydrogen peroxide molecules have their own unique properties and behave differently, even though they’re made up of the same atomic elements (hydrogen and oxygen). --- Brad Frost

_An example for a molecule could be a password component which is including the TextInput component and an eye icon which is on click switching in-between a password input or text input._

### Organisms

Molecules form complex organisms, these are reusable higher level patterns which might be a façade for underlying Molecules or Atoms. Organisms build components like a header with a search and a login molecule or a whole form. They are strongly opinionated, they will lead to a better consistency across a project.

Keep organisms simple, here is why an organism is not an app and they are the building blocks they should not include the business logic, they should display information. For example, if some information is getting displayed in two places of an app which are different components this information is once needed to generate. Also if the logic changes this needs to change in one place.

An Example of an organism is a Registration form which is consisting of a TextInput (Atom) and the Password Component (Molecule)

## Conventional Commits

We use conventional commits with angular preset.

### Commit types

We are supporting the conventional commit types as follows:

- **Features**
  `feat` - A new feature
- **Bug Fixes**
  `fix` - A bug fix
- **Documentation**
  `docs` - Documentation only changes
- **Styles**
  `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **Code Refactoring**
  `refactor` - A code change that neither fixes a bug nor adds a feature
- **Performance Improvements**
  `perf` - A code change that improves performance
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
