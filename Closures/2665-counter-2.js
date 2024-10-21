const createCounter = function (init) {
  let currentVal = init;

  return {
    increment: () => ++currentVal,
    decrement: () => --currentVal,
    reset: () => (currentVal = init),
  };
};

module.exports = createCounter;
