const once = (fn) => {
  let hasBeenCalled = false;

  return (...args) => {
    if (hasBeenCalled) return undefined;

    hasBeenCalled = true;
    return fn(...args);
  };
};

module.exports = once;
