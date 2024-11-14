/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = async (millis) => await new Promise(resolve => setTimeout(resolve, millis));

module.exports = sleep;