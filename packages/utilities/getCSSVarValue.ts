const getCSSVarValue = cssVar => {
  if (document.documentElement !== null) {
    // Get the content between the parentheses in "var()"
    // and split the args from a string to an array
    const cssVarArgsString = cssVar.match(/\(([^)]+)\)/)[1];
    const cssVarArgs = cssVarArgsString.replace(/\s/g, "").split(",");

    // If there's a custom property defined on :root (<html>), return that.
    // Otherwise, return the fallback value.
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(cssVarArgs[0])
        .trim() || cssVarArgs[1]
    );
  }
};

export default getCSSVarValue;
