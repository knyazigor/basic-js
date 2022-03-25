const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }

  Vizhener(phrase, keyWord, decrypt=false) {
    if (!phrase || !keyWord) throw Error('Incorrect arguments!')
    let keyOffset = 0;
    let result = [...phrase].map((char, i) => {
      
      if (!(/[a-zA-Z]/).test(char)) {
        keyOffset += 1;
        return char;
      }
      const charSum = char.toUpperCase().charCodeAt(0) + (decrypt ? -1 : 1)*(keyWord[(i - keyOffset) % keyWord.length].toUpperCase().charCodeAt(0) - 130);
      const offset = charSum % 26;
      const dchar = String.fromCharCode(offset + 65);
      return dchar;      
    })

    return this.direct ? result.join('') : result.reverse().join('');
  }

  encrypt(phrase=undefined, keyWord=undefined) {
    return this.Vizhener(phrase, keyWord)
  }
  decrypt(phrase=undefined, keyWord=undefined) {
    return this.Vizhener(phrase, keyWord, true)
  }
}

module.exports = {
  VigenereCipheringMachine
};
