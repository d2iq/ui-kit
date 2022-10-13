![UI Kit Space Banner](https://raw.githubusercontent.com/dcos-labs/ui-kit/main/.storybook/static/welcome-banner.svg)

# D2iQ UI Kit

UI Kit is a collaboration between D2iQ's product design team and engineering team. UI Kit provides tools for engineers to build applications that follow the standards and guidelines of the D2DS Design System.

- [Components](/packages)
- [Design Tokens](/packages/design-tokens)
- [Icon Library](/packages/icons)
- [Design Guidelines](/design-guidelines)

## Getting started

Install dependencies (Node v16+, NPM 7+)

```
npm i
```

Start the Storybook server locally then visit `http://localhost:6006/`

```
npm start
```

#### Linting

ESLint is used for linting within the project. We suggest installing the ESLint extension in your preferred code editor.

For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md#getting-started).

## New Components

To generate a new component run the command:

```
npm run create:component <ComponentName>
```

## Unit Testing

```
npm test
```

Use `test:watch` if you want the tests to run automatically when a file changes:

```
npm run test:watch
```

Pass parameters to the test engine (in this case jest) to run a single spec, for example, `badge`:

```
npm run test -- --watch badge
```

#### Writing Unit Tests

Important guidelines to follow for testing:

- Single Expectation test. Every unit test should verify one behavior.
- Keep your descriptions concise (bellow 40 chars ideally). One easy way to achieve this one is avoiding using "should".
- Create the data you need. If you have a more complicated scenario, generate the data that is relevant to that particular case.

For more on this topic, and examples we recommend
[Better Specs](http://www.betterspecs.org/).

```
import React from "react";
import { render } from "@testing-library/react";
import { BadgeButton } from "../";

describe('Badge', () => {
  it("match default badge button component", () => {
   const { asFragment } = render(
      <BadgeButton onClick={fn} appearance="success">
        success
      </BadgeButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
```

The function `asFragment` is preferred over `create` from `react-test-renderer` as it seems to give more robust components and less failures.

`baseElement` can also be useful for testing if you are dealing with testing something that renders out side of the container, such as a component that uses a portal like a DropdownMenu or Modal.

## Testing with Cypress

To make it easier to select DOM nodes of our components in integration tests, DOM nodes have a `data-cy` attribute.

### Naming Conventions for `data-cy` Values

**Parent nodes:** The value of `data-cy` for component's parent node is the same as the component name, and should be camelCased. For example: The parent node for `<PrimaryButton>` will have `data-cy="primaryButton"`.

**Child nodes:** If a child node has a `data-cy` added, there will be a dash between the parent node's name and a string to describe the child node. For example: The footer element of a `<DialogModal>` will have `data-cy="fullscreenModal-footer"`

**States and variants:** If a node has a special "state", `data-cy` will prepend a string describing that state after a dot.
For example:

- `<TextInput disabled>` will have `data-cy="textInput textInput.disabled"`
- A `<TextInput>` with an error will have `data-cy="textInput textInput.error"`

For more information on writing selectors, see the [Cypress guide](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements).

## Commits

We follow [Conventional Commit](https://conventionalcommits.org/) formatting rules, as they provide a framework to write explicit messages that are easy to comprehend when looking through the project history and enable automatic change log generation.

These Guidelines got written based on [AngularJS Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

## Release / Publishing

After your PR is merged into `main`, `semantic-release` will automatically cut a release if one of your commits is of type `feat`, `fix`, or `perf`.

## Pre-release Testing in a Host Project

Build:

`npm run dist`

To copy UI Kit into an existing project, run the following:

`cp -r dist/ ./<project>/node_modules/@dcos/ui-kit/`

Replace `<project>` with the associated host project name and folder structure.

After running the copy command above, restart the host application.
