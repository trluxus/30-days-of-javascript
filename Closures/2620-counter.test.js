const counter = require('./2620-counter');

test('returns [10,11,12]', () => {
  const fun = counter(10);
  const result = [];

  result.push(fun(), fun(), fun());

  expect(result).toEqual([10, 11, 12]);
});

test('returns [-2,-1,0,1,2]', () => {
  const fun = counter(-2);
  const result = [];

  result.push(fun(), fun(), fun(), fun(), fun());

  expect(result).toEqual([-2, -1, 0, 1, 2]);
});
