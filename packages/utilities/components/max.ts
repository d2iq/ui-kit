function calculate(a, b) {
  return b > a ? b : a;
}

function max(a?: number | Date | string, b?: number | Date | string) {
  if (arguments.length === 0) {
    return max;
  }
  if (arguments.length === 1) {
    return b => {
      return calculate(a, b);
    };
  }
  return calculate(a, b);
}

export default max;
