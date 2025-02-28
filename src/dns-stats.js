const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains
    .map(domain => domain.split('.')
    .reverse())
    .map(e => e.reduce((acc, el, i) => {    
      acc.push((i > 0) ? `${acc[i-1]}.${el}` : el)
      return acc
    }, []))
    .reduce((acc, el) => {
      el.forEach(domain => {
        acc[`.${domain}`] = (acc[`.${domain}`] || 0) + 1
      })
      return acc
    },{})
    
}

module.exports = {
  getDNSStats
};
