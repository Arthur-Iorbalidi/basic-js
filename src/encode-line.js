const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  let counter = 1;
  let result = "";
  for(let i = 0; i < str.length; i++) {
    if(array[i] === array[i + 1]) {
      counter++;
    }
    else {
      if(counter > 1) {
        result += `${counter}${array[i]}`;
      }
      else {
        result += `${array[i]}`;
      }
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
