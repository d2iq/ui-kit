function calculate(a, b) {
  return (b / 100) * a;
}

function percentage(a?: number, b?: number) {
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
