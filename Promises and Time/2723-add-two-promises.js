/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
    return await promise1 + await promise2;
};

module.exports = addTwoPromises;