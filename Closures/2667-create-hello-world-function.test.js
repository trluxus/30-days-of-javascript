const createHelloWorld = require('./2667-create-hello-world-function');

test('returns "Hello World"', () => {
  expect(createHelloWorld()([])).toBe('Hello World');
});

test('returns "Hello World"', () => {
  expect(createHelloWorld()([{}, null, 42])).toBe('Hello World');
});
