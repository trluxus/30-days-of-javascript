const filter = require("./2634-filter-elements-from-array");

test("returns [20,30]", () => {
  const fun = function greaterThan10(n) {
    return n > 10;
  };
  const arr = [0, 10, 20, 30];

  expect(filter(arr, fun)).toEqual([20, 30]);
});

test("returns [1]", () => {
  const fun = function firstIndex(n, i) {
    return i === 0;
  };
  const arr = [1, 2, 3];

  expect(filter(arr, fun)).toEqual([1]);
});

test("returns [42,42,42]", () => {
  const fun = function plusOne(n) {
    return n + 1;
  };
  const arr = [-2, -1, 0, 1, 2];

  expect(filter(arr, fun)).toEqual([-2, 0, 1, 2]);
});
