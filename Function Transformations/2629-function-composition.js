const compose = (functions) => {
  return functions.reduce(
    (acc, fn) => {
      return (x) => acc(fn(x));
    },
    (x) => x
  );
};

module.exports = compose;
