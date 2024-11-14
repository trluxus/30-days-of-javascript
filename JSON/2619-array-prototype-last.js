/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = () => {
    return this.length ? this[this.length - 1] : -1;
};