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
  const arr = [];
  const s = '' + n
  for (let i = 0; i <= s.length - 1; i++) {
    let res = '';    
    for (let j = 0; j <= s.length - 1; j++) {
      res += j == i ? '' : s[j]; 
    }
    arr.push(+res);
  }
  return Math.max(...arr);  
}

module.exports = {
  deleteDigit
};
