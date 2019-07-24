# DCOS UI Kit

Mesosphere DCOS resusable UI Kit components

## Getting started

Install dependencies (Node v8+, NPM 5+)

```bash
npm i
```

## Development

Start storybook server locally then visit `http://localhost:6006/`

```bash
npm start
```

**How to setup git hooks**

Run the following npm script

```bash
npm run setup:git-hooks
```

**Linting** <br>
For linting, use your favorite code editor to enable tslint.
If you use vscode you can change your workspace settings as following

```
{
  "eslint.enable": false,
  "jshint.enable": false,
  "tslint.enable": true,
  "tslint.jsEnable": false,
  "tslint.run": "onType"
}
```

## New component

To generate a new component run the command

```
npm run create:component ComponentName
```

## Unit Testing

```sh
npm test
```

Use `test:watch` if you want the tests to run automatically when a file changes:

```sh
npm run test:watch
```

You can even pass parameters to the test engine (in this case jest), when you,
for instance, want to run a single spec, for example, `badge`:

```sh
npm run test -- --watch badge
```

**Writing unit tests** <br>
A recommended reading is [Better Specs](http://www.betterspecs.org/), we put
[real effort](https://github.com/dcos/dcos-ui/pull/2524) in making sure we
follow these guidelines. Some of the most common ones to follow:

- Single Expectation test: Every unit test should verify one behavior.
- Keep your descriptions concise (bellow 40 chars ideally): One easy way to achieve this one is avoiding using "should" (e.g. "it does not use should" instead of "it should not contain should").
- Create the data you need: If you have a more complicated scenario, generate the data that is relevant to that particular case.

For more on this topic, and examples we recommend
[Better Specs](http://www.betterspecs.org/).

```
import React from "react";
import Badge from '../badge';
import renderer from 'react-test-renderer';

describe('Badge', () => {
  it("match default badge component", () => {
    expect(renderer
    .create(<Badge>default</Badge>)
    .toJSON()).toMatchSnapshot()
  });
});
```

## Testing with Cypress
To make it easier to select DOM nodes of our components, DOM nodes have a `data-cy` attribute.

### `data-cy` value naming convention
**Parent nodes:** The value of `data-cy` for component's parent node is the same as the component name, but camelCased. For example: The parent node for `<PrimaryButton>` will have `data-cy="primaryButton"`

**Child nodes:** If a child node has a `data-cy` added, there will be a dash between the parent node's name and a string to describe the child node. For example: The footer element of a `<DialogModal>` will have `data-cy="fullscreenModal-footer"`

**States and variants:** If a node has a special "state", `data-cy` will prepend a string describing that state after a dot.
For example:
* `<TextInput disabled>` will have `data-cy="textInput textInput.disabled"`
* A `<TextInput>` with an error will have `data-cy="textInput textInput.error"`

For more information on writing selectors, see the [Cypress guide](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements).

## Commits

You should follow [conventional commit](https://conventionalcommits.org/) formatting rules, as they provide a framework to write explicit messages that are easy to comprehend when looking through the project history and enable automatic change log generation.

These Guidelines got written based on [AngularJS Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

## Release / Publishing

After your PR gets merged to `master`, `semantic-release` will automatically cut a release.
