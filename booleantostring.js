/* Convert a Boolean to a String */

/* given: function booleanToString(b){
      } */

/* option1: */
function booleanToString(b){
    return b + "";
}    
console.log(booleanToString());

/* option2: */
function booleanToString(b){
    if(b){
      return "true";
    }else{
      return "false";
    }
  }
  console.log(booleanToString());