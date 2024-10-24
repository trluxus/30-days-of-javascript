const memoize = (fn) => {
  const storage = new Map();

  return function (...args) {
    const key = String(args);

    if (storage.has(key)) {
      return storage.get(key);
    }

    const result = fn(...args);
    storage.set(key, result);
    return result;
  };
};

module.exports = compose;
