/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = (fn, t) => {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

            fn(...args)
                .then(resolve)
                .catch(reject)
        });
    }
};