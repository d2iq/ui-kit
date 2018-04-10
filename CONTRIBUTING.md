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
