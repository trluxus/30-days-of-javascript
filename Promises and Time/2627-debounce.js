/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};