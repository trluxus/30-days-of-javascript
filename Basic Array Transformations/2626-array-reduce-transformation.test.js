const reduce = require('./2626-array-reduce-transformation');

test('returns 10', () => {
  const fun = function sum(accum, curr) {
    return accum + curr;
  };
  const nums = [1, 2, 3, 4];

  expect(reduce(nums, fun, 0)).toBe(10);
});

test('returns 130', () => {
  const fun = function sum(accum, curr) {
    return accum + curr * curr;
  };
  const nums = [1, 2, 3, 4];

  expect(reduce(nums, fun, 100)).toBe(130);
});

test('returns 25', () => {
  const fun = function sum(accum, curr) {
    return 0;
  };
  const nums = [];

  expect(reduce(nums, fun, 25)).toBe(25);
});
