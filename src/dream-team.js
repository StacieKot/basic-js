const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if(!members){
      return false;
   }
   let teamName = [];
   let n = 0;
   for(let i = 0; i < members.length; i++){
      if(typeof(members[i])==='string' && members[i]){
         members[i]=members[i].trim().toUpperCase();
         teamName[n]=members[i][0];
         n++;
      }
    }
    return teamName.sort().join('');
   }


   function createDreamTeam(members) {
      if(!members){
         return false;
      }
      let teamName = [];
      let n = 0;
      for(let i = 0; i < members.length; i++){
         if(typeof(members[i])==='string' && members[i]){
            members[i]=members[i].trim().toUpperCase();
            teamName[n]=members[i][0];
            n++;
         }
       }
       return teamName.sort().join('');
      }

      