const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = []
  const arr2 = arr.reduce((acc, el, i) => {
    if (el == -1) indexes.push(i)
    else acc.push(el)
    return acc
  }, []).sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i == indexes[0]) {
      result.push(-1)
      indexes.shift()
      continue
    }
    result.push(arr2.shift())
  }
  return result
}

module.exports = {
  sortByHeight
};
