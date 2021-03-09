const CustomError = require("../extensions/custom-error");

module.exports =  class DepthCalculator {
   calculateDepth(arr) {
      
      if(!Array.isArray(arr)){
         return 0;
      }
      let inc = 0;
      
      arr.forEach( v => {
         if(Array.isArray(v)){
            let depth = this.calculateDepth(v);
            if(inc < depth){
               inc = depth;
            }
         } 
      });
      return ++inc;
   }
 };

