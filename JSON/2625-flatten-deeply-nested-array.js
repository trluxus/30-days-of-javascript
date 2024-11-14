/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = function (arr, n) {
    if (n == 0)
        return arr;

    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (n > 0 && Array.isArray(arr[i])) {
            answer.push(...flat(arr[i], n - 1));
        }
        else {
            answer.push(arr[i]);
        }
    }

    return answer;
};