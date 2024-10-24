const argumentsLength = require('./2703.return-length-of-arguments-passed');

test('returns 1', () => {
  expect(argumentsLength([5])).toBe(1);
});

test('returns 3', () => {
  expect(argumentsLength({}, null, '3')).toBe(3);
});
