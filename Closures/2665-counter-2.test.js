const counter = require("./2665-counter-2");

test("returns [6, 5, 4]", () => {
  const fun = counter(5);
  const result = [];

  result.push(fun.increment(), fun.reset(), fun.decrement());

  expect(result).toEqual([6, 5, 4]);
});

test("returns [1,2,1,0,0]", () => {
  const fun = counter(0);
  const result = [];

  result.push(
    fun.increment(),
    fun.increment(),
    fun.decrement(),
    fun.reset(),
    fun.reset()
  );

  expect(result).toEqual([1, 2, 1, 0, 0]);
});
