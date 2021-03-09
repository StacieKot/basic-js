const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = '^^';
  let catsCount = 0;
  for(let i = 0; i < matrix.length; i++){
     for(let n = 0; n < matrix[i].length; n++){
        if(matrix[i][n]===cats){
          catsCount++;
        }
     }
  }
  return catsCount;
};

