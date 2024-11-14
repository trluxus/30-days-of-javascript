/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = (fn, args, t) => {
    const cancelFn = () => clearTimeout(timer);
    const timer = setTimeout(() => fn(...args), t);
    return cancelFn;
};
