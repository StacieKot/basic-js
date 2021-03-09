const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if(!sampleActivity || typeof(sampleActivity)!=="string" || !Number(sampleActivity)){
      return false;
   } 
   sampleActivity = Number(sampleActivity);
   if(sampleActivity <=0 || sampleActivity > MODERN_ACTIVITY){
      return false;
   }
  let k = 0.693 / HALF_LIFE_PERIOD;
  t =  Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  return t;
};

function dateSample(sampleActivity) {
   if(!sampleActivity || typeof(sampleActivity)!=="string" || !Number(sampleActivity)){
      return false;
   } 
   sampleActivity = Number(sampleActivity);
   if(sampleActivity <=0 || sampleActivity > MODERN_ACTIVITY){
      return false;
   }
  let k = 0.693 / HALF_LIFE_PERIOD;
  t =  Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  return t;
};

console.log(dateSample('12.325349094365222'));