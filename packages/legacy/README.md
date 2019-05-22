## Legacy components
The contents of the `legacy/` directory have been ported over from [reactjs-components](https://github.com/mesosphere/reactjs-components).

### These are temporary
Once all components from reactjs-components as ported to ui-kit, dcos-ui can import legacy components from ui-kit and drop reactjs-components as a dependency.

After that, dcos-ui can replace legacy components with new ui-kit components and we can remove slowly remove the contents of the `legacy` directory.

### Documentation
reactjs-components documentation: http://mesosphere.github.io/cnvs/
There are no plans to move this documentation to ui-kit

### Do not use this code as reference
The JavaScript had to be converted to Typescript in order to be compiled by `tsc`, but the type-checking is extremely minimal and should not be used as an example for acceptable Typescript usage.

The styles have been converted from LESS to Emotion, but have not been refactored to follow the best practices of styling with Emotion.
