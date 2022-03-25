const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length
  },
  addLink(value) {
    this.chains.push(value)
    return this
  },
  removeLink(position) {
    if (position > 0 && position < this.chains.length) {
      this.chains.splice(position-1, 1)
      return this
    }
    else {
      this.chains = []
      throw Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {    
    const res = this.chains.map(el => `( ${el} )`).join('~~')
    this.chains = []
    return res
  }
};

module.exports = {
  chainMaker
};
