# Contributing

## Creating a new Component

To create a new component from within the repository you need to run

```sh
npm run create:component -- ${Component Name}
```

But apart from adding a new component there are some guidelines which we want to follow.

So while creating a new component there are a couple of things everyone should think about before releasing a new component. This is important because once we released a component and it already got adopted it is rather difficult to remove or change functionality of a component.

### Rigid VS. Flexible

Generally a component should rather be rigid then flexible. That means that we rather create more components then creating one which has a very high complexity. Although a flexible component has a higher rate of reusability in more contexts the complexity increases a lot more. Which is a easy way to introduce a lot of errors to a component, that is why we prefer to have rigid components. A rigid component is simple, easy to understand, easy to test, less code and also improves the consistency.

> It is always easy to add flexibility later, it is nearly impossible to remove flexibility.

> -- Random Person on the Internet

So while creating a component think about one single reappearing use-case and create a component to solve that use-case. And do not try to think about a million use-cases which one component could handle. Less features means more simplicity and consistency.

### Introducing 3rd Party Components

There are 3 ways to introduce 3rd party components to the `ui-kit`

* Link  
  We just add a link to that component to the documentation. This is not a favourable way.
* Wrap  
  We are creating our own component but in that component we are utilising a 3rd party component, this solution is the favourable solution for the `ui-kit` as with that solution we are adding consistency to the 3rd party components and there is a single point to change the usage of that component if we decide to update the component or replace the component with our own implementation or an other implementation.
* Fork  
   We should only do that if we do not see any other solution.

<!--
TODO: add step by step guide for forking.
- Key decisions needed
    - we forking repositories into the ui-kit or are we creating a new repository within `dcos-labs`.
-->

Going from link via wrap to fork increases the control over component but also increases the effort need to update the component. Wrap is the sweet spot between consistency and functionality vs control and effort.

### Moving A Component From `dcos/dcos-ui` To The `ui-kit`

There will be often a chance when you create a component in `DCOS-ui` that it is a good candidate for the ui-kit, but before moving it over to the ui-kit move it to the `candidate` directory in `dcos/dcos-ui` on a regular basis we are going to evaluate usage of components in the `candidate` directory. In that way we have a good overview over candidate components for the ui-kit.

> Rule of Three:  
> Try a component in three different places before placing it into ui-kit

### Creating a Reusable Component

#### Avoid Weak Elements

Weak elements are elements which can’t nest block elements for example a `p` tag is not able to wrap around a div which will reduce the comparability of a component. This is why we try to rather use a strong element like `section` or `div` instead of `p`.

#### Declare Prop Types

Since the `ui-kit` is using typescript please make sure to define proper prop types to your components. This will improve the documentation, which is created dynamically, and will provide better error messages for the users. And also this will provide auto completition in some IDE’s. Describe the props as good as possible, so also define object shapes or array shapes.

#### Never hard code HTML ID’s

This might conflict at some point. If you really need a id on the element expose a prop for that so the user can define it based on the application.

#### Use Logical Defaults

Use prop defaults which make sense this will reduce the efforts needed to adopt this component.

#### A11y Support

A good start on that topic is to read [this website](https://a11yproject.com/)
While creating your component think about users: - Which only use keyboards - expose tab indexes as props - Use semantic correct HTML - ARIA

#### Configuration Objects

Please consider using configuration objects as they will provide the user a lot of valuable by

* consistency
* less typing needed
* less error prone

But please avoid using configuration Objects if you only have 3 or less properties.

#### Single Responsibility Principle

Keep the components simple by applying them to a single responsibility. In that way the component will stay simple in most cases. Try not to introduce too many props. Each prop is a configuration which will automatically increase the complexity. Before adding a property to a existing component ask yourself if this could be a new component.

#### Keep Components Dumb

It is important to keep components as dumb as possible, only add logic to a component if it improves performance or quality of a component. For example, paginating a list if the number of items is exceeding a certain amount or having a show toggle to show more content like a drop out.

#### Directory Structure

<!--
TODO: Decide on directory structure.
-->
