const createHelloWorld = function () {
  const helloWorld = 'Hello World';

  return function () {
    return helloWorld;
  };
};

module.exports = createHelloWorld;
