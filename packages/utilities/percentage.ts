function calculate(a, b) {
  return (b / 100) * a;
}

// Using "any" to get around a Typescript error that popped up
// when upgrading to 3.5.3.
// This function isn't even used anywhere.
function percentage(a?: number, b?: number): any {
  if (arguments.length === 0) {
    return percentage;
  }
  if (arguments.length === 1) {
    return b => {
      return calculate(a, b);
    };
  }
  return calculate(a, b);
}

export default percentage;
