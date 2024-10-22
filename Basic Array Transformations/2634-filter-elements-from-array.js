const filter = (arr, fn) => {
  const filteredArr = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) filteredArr.push(element);
  });

  return filteredArr;
};

module.exports = filter;
