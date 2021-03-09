const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   str = str + "";
   let newStr = ''; 
   options = options || {};
   let addition;
   if(options.addition===undefined){
      addition ='';
   } else{
      addition = options.addition + '';
   }
   options.addition = addition;
   let repeatTimes =  options.repeatTimes || 0;
   let separator = options.separator || '+';
   let additionSeparator = options.additionSeparator || '|';
   let additionRepeatTimes = options.additionRepeatTimes || 0;
    
   let newAddition = addition;
 
 
   if(additionRepeatTimes >= 1){
    for( i = 1; i < additionRepeatTimes; i++){
      newAddition  = newAddition  + additionSeparator + addition;          
     }
   } else{
      newAddition = addition;
   }
 
   if( repeatTimes >= 1){
      for(i=1; i <= repeatTimes; i++){
         
         if(i === repeatTimes){
            newStr = newStr + str + newAddition;
         } else{
            newStr = newStr + str + newAddition + separator;
         }
      }
   } else {
      newStr = str + newAddition;
   }

   return newStr;
 };
  
  