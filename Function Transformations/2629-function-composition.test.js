const compose = require('./2629-function-composition');

test('returns 65', () => {
  expect(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4)).toBe(65);
});

test('returns 1000', () => {
  expect(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1)).toBe(1000);
});

test('returns 42', () => {
  expect(compose([])(42)).toBe(42);
});
