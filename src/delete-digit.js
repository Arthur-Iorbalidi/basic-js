const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nstr = String(n);
  let max = -1;
  for(let i = 0; i < nstr.length; i++) {
    let num = parseInt(nstr.slice(0, i) + nstr.slice(i + 1));
    if(num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
