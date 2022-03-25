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
  const arr = str.split('')
    const resultArr = []
    for (let i = 0; i <= arr.length - 1; i++) {
        let counter = 1;
        while (arr[i+1] && arr[i+1] == arr[i]) {
            counter++;
            i++;
        }
        resultArr.push([counter, arr[i]])
    }
  return resultArr.reduce((acc, el) => acc += `${el[0] > 1 ? el[0] : ''}${el[1]}`, '')
}

module.exports = {
  encodeLine
};
