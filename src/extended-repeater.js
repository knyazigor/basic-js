const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  
  for (let i = 0; i < repeatTimes; i++) {
    let s = `${str}`;
    let a = [];

    for (let j = 0; j < additionRepeatTimes; j++) {
      a.push(`${addition}`)
    }
    
    result.push(s+a.join(additionSeparator));
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
