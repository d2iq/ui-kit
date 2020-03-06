namespace React {
  interface ReactChildren {
    // we sometimes want to handle typed children, which react does not support out of the box.
    // instead of jumping through hoops, we introduce this parameterized version of toArray.
    toArray<A>(children?: A | A[]): A[];
  }
}
