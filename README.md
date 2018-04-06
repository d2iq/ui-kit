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

* Single Expectation test: Every unit test should verify one behavior (and one behavior only).
* Keep your descriptions concise (bellow 40 chars ideally): One easy way to achieve this one is avoiding using "should" (e.g. "it does not use should" instead of "it should not be written with should").
* Create only the data you need: Especially if you have a more complicated scenario, just generate the data that is relevant to that particular case.

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

## Commits

You should follow [conventional commit](https://conventionalcommits.org/) formatting rules, as they provide a framework to write explicit messages that are easy to comprehend when looking through the project history and enable automatic change log generation.

These Guidelines were written based on [AngularJS Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines).

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

## Release / Publishing

After your PR is merged to `master` to cut a release is very simple, assuming you are `on master` branch follow the steps below.

Fetch all git tags

```
git fetch origin --tags
```

Then run the command to automatically update the `package.json`, `changelog.md` and create a new release commit.

```
npm run release
```

Now push the latest commit and the tag created (_run `git tag` to see all tags_).

```
git push origin master && git push origin TAG_VERSION
```

And finally publish to npm.

```
npm publish
```
