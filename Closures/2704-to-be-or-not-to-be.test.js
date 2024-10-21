const expect = require("./2704-to-be-or-not-to-be");

test("returns true", () => {
  const fun = expect(5);

  expect(fun.toBe(5)).toBe(true);
});

test("returns true", () => {
  const fun = expect(5);

  expect(fun.notToBe(null)).toBe(true);
});
