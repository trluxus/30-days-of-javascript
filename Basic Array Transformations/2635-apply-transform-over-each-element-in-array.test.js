const map = require('./2635-apply-transform-over-each-element-in-array');

test('returns [2,3,4]', () => {
  const fun = function plusone(n) {
    return n + 1;
  };
  const arr = [1, 2, 3];

  expect(map(arr, fun)).toEqual([2, 3, 4]);
});

test('returns [1,3,5]', () => {
  const fun = function plusI(n, i) {
    return n + i;
  };
  const arr = [1, 2, 3];

  expect(map(arr, fun)).toEqual([1, 3, 5]);
});

test('returns [42,42,42]', () => {
  const fun = function constant(n, i) {
    return 42;
  };
  const arr = [10, 20, 30];

  expect(map(arr, fun)).toEqual([42, 42, 42]);
});
