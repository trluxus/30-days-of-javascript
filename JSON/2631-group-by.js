/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((res, item) => {
        let key = fn(item);
        if (!res[key]) res[key] = [];
        res[key].push(item);
        return res;
    }, {});
};