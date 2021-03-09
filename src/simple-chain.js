const CustomError = require("../extensions/custom-error");


const chainMaker = { 
 
   storage : [],
 
   getLength() {
     return this.storage.join('').getLength;
   },
   addLink(value) {
      this.storage.push(`( ${value} )`);
     return this;
   },
   removeLink(position) {
    if(!this.storage[position] || position%1!==0){
      this.storage = [];
      throw {name: 'TypeError', message: 'position  is invalid' }
    }
    this.storage.splice(position-1, 1);
    return this;
   },
   reverseChain() {
     this.storage.reverse();
     return this;
   },
   finishChain() {
      let str = this.storage.join('~~');
      this.storage = [];
      return str;
    }
 };

module.exports = chainMaker;

