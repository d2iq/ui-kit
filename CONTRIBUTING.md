# Contributing

- [Contributing](#contributing)
  - [Creating a new Component](#creating-a-new-component)
    - [Rigid VS. Flexible](#rigid-vs-flexible)
    - [Introducing 3rd Party Components](#introducing-3rd-party-components)
    - [Moving A Component From `dcos/dcos-ui` To The `ui-kit`](#moving-a-component-from-dcosdcos-ui-to-the-ui-kit)
    - [Creating a Reusable Component](#creating-a-reusable-component)
      - [Avoid Weak Elements](#avoid-weak-elements)
      - [Declare Prop Types](#declare-prop-types)
      - [Never hard code HTML ID’s](#never-hard-code-html-id%E2%80%99s)
      - [Use Logical Defaults](#use-logical-defaults)
      - [A11y Support](#a11y-support)
      - [Configuration Objects](#configuration-objects)
      - [Single Responsibility Principle](#single-responsibility-principle)
      - [Keep Components Dumb](#keep-components-dumb)
      - [Directory Structure](#directory-structure)
  - [Atomic Design](#atomic-design)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)

## Creating a new Component

To create a new component from within the repository you need to run

```sh
npm run create:component -- ${Component Name}
```

But apart from adding a new component, there are some guidelines which we want to follow.

So while creating a new component there are a couple of things everyone should think about before releasing a new component. This is important because once we released a component and it already got adopted it is rather difficult to remove or change the functionality of a component.

### Rigid VS. Flexible

Generally, a component should rather be rigid than flexible. That means that we rather create more components then creating one which has a very high complexity. Although a flexible component has a higher rate of reusability in more contexts the complexity increases a lot more. Which is an easy way to introduce a lot of errors to a component, that is why we prefer to have rigid components. A rigid component is simple, easy to understand, easy to test, less code and also improves the consistency.

> It is always easy to add flexibility later, it is nearly impossible to remove flexibility.

> -- Random Person on the Internet

So while creating a component think about one single reappearing use-case and create a component to solve that use-case. And do not try to think about a million use-cases which one component could handle. Fewer features mean more simplicity and consistency.

### Introducing 3rd Party Components

There are 3 ways to introduce 3rd party components to the `UI-kit`

* Link  
  We just add a link to that component to the documentation. This is not a favorable way.
* Wrap  
  We are creating our own component but in that component we are utilising a 3rd party component, this solution is the favourable solution for the `UI-kit` as with that solution we are adding consistency to the 3rd party components and there is a single point to change the usage of that component if we decide to update the component or replace the component with our own implementation or the other implementation.
* Fork  
   We should only do that if we do not see any other solution.

<!--
TODO: add step by step guide for forking.
- Key decisions needed
    - we forking repositories into the UI-kit or are we creating a new repository within `dcos-labs`.
-->

Going from link via wrap to fork increases the control over component but also increases the effort need to update the component. A wrap is a sweet spot between consistency and functionality vs control and effort.

### Moving A Component From `dcos/dcos-ui` To The `ui-kit`

There will be often a chance when you create a component in `DCOS-ui` that it is a good candidate for the ui-kit, but before moving it over to the ui-kit move it to the `candidate` directory in `dcos/dcos-ui` on a regular basis we are going to evaluate usage of components in the `candidate` directory. In that way, we have a good overview of candidate components for the ui-kit.

> Rule of Three:  
> Try a component in three different places before placing it into ui-kit

### Creating a Reusable Component

#### Avoid Weak Elements

Weak elements are elements which can’t nest block elements, for example, a `p` tag is not able to wrap around a div which will reduce the comparability of a component. This is why we try to rather use a strong element like `section` or `div` instead of `p`.

#### Declare Prop Types

Since the `ui-kit` is using typescript please make sure to define proper prop types for your components. This will improve the documentation, which is created dynamically and will provide better error messages for the users. And also this will provide auto-completion in some IDE’s. Describe the props as good as possible, so also define object shapes or array shapes.

#### Never hard code HTML ID’s

This might conflict at some point. If you really need an id on the element expose a prop for that so the user can define it based on the application.

#### Use Logical Defaults

Use prop defaults which make sense this will reduce the efforts needed to adopt this component.

#### A11y Support

A good start on that topic is to read [this website](https://a11yproject.com/)
While creating your component think about users: - Which only use keyboards - expose tab indexes as props - Use semantic correct HTML - ARIA

#### Configuration Objects

Please consider using configuration objects as they will provide the user a lot of value by

* consistency
* less typing needed
* less error prone

But please avoid using configuration Objects if you only have 3 or fewer properties.

#### Single Responsibility Principle

Keep the components simple by applying them to a single responsibility. In that way, the component will stay simple in most cases. Try not to introduce too many props. Each prop is a configuration which will automatically increase the complexity. Before adding a property to an existing component ask yourself if this could be a new component.

#### Keep Components Dumb

It is important to keep components as dumb as possible, only add logic to a component if it improves performance or quality of a component. For example, paginating a list if the number of items is exceeding a certain amount or having a show toggle to show more content like a dropout.

#### Directory Structure

<!--
TODO: Decide on directory structure.
-->

## Atomic Design

Atomic design is the principle we are trying to follow while we create components. More information on the principle can be read at [atomicdesign.bradfrost.com](http://atomicdesign.bradfrost.com/)

### Atoms

Atoms are the smallest building blocks and the form the foundation of the library. Atoms are usually composed together with other atoms to create a molecule.
Some best practices here are:

* Honour the native API’s, for example, if you define a prop for `tabIndex` call it `tabIndex` instead of `tabindex` or `indexOfTabs`. This will improve consistency.
* Pass props via spread, if you need to pass props to a component using the spread operator like this `<input type="password" {...this.props} />`
* Use spread with destructing, use the destruct to remove props which you do not want to pass and then use spread to pass the props to the component.
  ```JS
  ({value, ...props}) => (<button {...props}>{value}</button>)
  ```
  * Do not scare away to create formatting components like MiB for adding MiB to a number `<MiB>1024</MiB> => 1024 MiB`

Naming an atom we should use plurals instead of a suffix so it should rather be users then userList.

An Example of an Atom could be a `TextInput` component which basically provides an input field.

### Molecules

> Multiple atoms are composed together creating Simple Functional Reusable Components.

Molecules are the next bigger component type after atoms, they are usually made up of multiple atoms and they should still have only one purpose and do that one very well. By including multiple atoms the molecule does not need to expose all the properties of the atoms, but only the ones necessary to build the molecule. The purpose of this is to increase the consistency of dcos-ui which is the main use case for the ui-kit.

> For instance, water molecules and hydrogen peroxide molecules have their own unique properties and behave quite differently, even though they’re made up of the same atomic elements (hydrogen and oxygen). --- Brad Frost

_An example for a molecule could be a password component which is including the TextInput component and an eye icon which is on click switching in-between a password input or text input._

### Organisms

Molecules form complex organisms, these are reusable higher level patterns which might be a façade for underlying Molecules or Atoms. Organisms build bigger components like a header with a search and a login molecule or a whole form. They are strongly opinionated, they will lead to a better consistency across a project.

Keep organisms dumb, here is why an organism is not an app and they are just the building blocks they should not include the business logic, they should only display information. For example, if some information is displayed in two places of an app which are different components this information is only once needed to generate. Also if the logic changes this only needs to change in one place and not multiple.

An Example of an organism is a Registration form which is consisting of a TextInput (Atom) and the Password Component (Molecule)
