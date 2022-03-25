const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const countLetters = (acc, el) => ({
    ...acc, 
    [el]: (acc[el] || 0) + 1
  })
  
  const obj1 = [...s1].reduce(countLetters, {});
  const obj2 = [...s2].reduce(countLetters, {});
  let counter = 0;
  for (let [key] of Object.entries(s1.length >= s2.length ? obj1 : obj2)) {
    counter += Math.min((obj1[key] || 0), (obj2[key] || 0))
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
