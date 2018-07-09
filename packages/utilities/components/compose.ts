export function compose<A, B, C>(b: (v: B) => C, a: (v: A) => B): (a: A) => C;
export function compose<A, B, C, D>(
  c: (v: C) => D,
  b: (v: B) => C,
  a: (v: A) => B
): (a: A) => D;
export function compose<A, B, C, D, E>(
  d: (v: D) => E,
  c: (v: C) => D,
  b: (v: B) => C,
  a: (v: A) => B
): (a: A) => E;
export function compose<A, B, C, D, E, F>(
  e: (v: E) => F,
  d: (v: D) => E,
  c: (v: C) => D,
  b: (v: B) => C,
  a: (v: A) => B
): (a: A) => F;
export function compose<A, B, C, D, E, F, G>(
  f: (v: F) => G,
  e: (v: E) => F,
  d: (v: D) => E,
  c: (v: C) => D,
  b: (v: B) => C,
  a: (v: A) => B
): (a: A) => G;
export function compose<A, B, C, D, E, F, G, H>(
  g: (v: G) => H,
  f: (v: F) => G,
  e: (v: E) => F,
  d: (v: D) => E,
  c: (v: C) => D,
  b: (v: B) => C,
  a: (v: A) => B
): (a: A) => H;

export function compose(...functions) {
  const fn = functions.reverse();
  return value => fn.reduce((memo, fn) => fn(memo), value);
}

export default compose;
