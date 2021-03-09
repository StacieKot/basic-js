const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if(!Array.isArray(arr)){
      throw {name: 'TypeError', message: 'arr is not an Array' }
   }
   let newArr = [];
   let i = 0;
   while( i < arr.length){
      switch (arr[i]){
         case ('--discard-next'):
            i=i+2;
           break;    
         case  ('--discard-prev'):
            if(arr[i-2]!=='--discard-next'){
               newArr.pop();
            }
            i++;
            break;
         case ('--double-next'):
            if(arr[i+1]!==undefined){
               newArr.push(arr[i+1]);
            } 
            i++;
            break;
         case ('--double-prev'):
            if(arr[i-1]!==undefined && arr[i-2]!=='--discard-next'){
               newArr.push(arr[i-1]);
            }
            i++;
            break;
         default:
            newArr.push(arr[i]);
            i++
      }
   }
   return newArr;
};
