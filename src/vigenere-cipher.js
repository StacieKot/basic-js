const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 
   constructor(direcction){
      this.direcction = direcction;
      this. alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   }
  
   encrypt(message, key) {
      if(!message || !key){
       throw new Error();
      }
      let newMessage = message.toUpperCase().split('');
      let newKey = key.toUpperCase().split('');
       for(let i = 0; i < key.length; i++){
          if(newKey.length>=message.length){
             break;
          }
          newKey.push(newKey[i]);
          if(i === key.length - 1){
             i = -1;
          }
       }
       let n = 0;
      for(let i =0; i < newMessage.length; i++){
         if(this.alphabet.indexOf(newMessage[i])!==-1){
            let position = (this.alphabet.indexOf(newMessage[i]) + this.alphabet.indexOf(newKey[n]))%26;
            newMessage[i]=this.alphabet[position];
            n++;
         } 
      }
      if(this.direcction===false){
         return newMessage.reverse().join('');
      }
      return newMessage.join('');
   }    
 
   decrypt(message, key) {
    if(!message || !key){
       throw new Error();
      }
       let newMessage = message.split('');
       let newKey = key.toUpperCase().split('');
       for(let i = 0; i < key.length; i++){
          if(newKey.length>=message.length){
             break;
          }
          newKey.push(newKey[i]);
          if(i === key.length - 1){
             i = -1;
          }
       }
 
      let n = 0;
      for(let i = 0; i < newMessage.length; i++){
         if(this.alphabet.indexOf(newMessage[i])!==-1){
            let a = this.alphabet.indexOf(newMessage[i]);
            let b = this.alphabet.indexOf(newKey[n]);
            let position;
            if((a - b) < 0){
               position = 26 + this.alphabet.indexOf(newMessage[i]) - this.alphabet.indexOf(newKey[n]);
            } else{
              position = this.alphabet.indexOf(newMessage[i]) - this.alphabet.indexOf(newKey[n]);
            }
           
            newMessage[i]=this.alphabet[position];
            n++;
         } 
      }
      if(this.direcction===false){
       return newMessage.reverse().join('');
    }
    return newMessage.join('');
 
   }
 };

module.exports = VigenereCipheringMachine;

