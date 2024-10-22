const reduce = (nums, fn, init) => {
  let current = init;

  nums.forEach((element) => {
    current = fn(current, element);
  });

  return current;
};

module.exports = reduce;
