/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function (arr1, arr2) {
    const result = {};

    arr1.concat(arr2).forEach(item => {
        if (result[item.id]) {
            Object.assign(result[item.id], item);
        } else {
            result[item.id] = item;
        }
    })

    return Object.values(result)
};