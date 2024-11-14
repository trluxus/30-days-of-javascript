/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = (fn, args, t) => {
    fn(...args);
    const cancelFn = () => clearInterval(interval);
    const interval = setInterval(() => fn(...args), t);
    return cancelFn;
};
