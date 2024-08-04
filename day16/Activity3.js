//Task 1
function reverseString(str) {
      if(str===""){
        return "";
      }
      return reverseString(str.substr(1))+str.charAt(0);
}
console.log(reverseString("hello"));

//Task 2
function checkPalindrome(str,ind) {
      if(ind>=str.length/2){
        return true;
      }
      if(str.charAt(ind)!=str.charAt(str.length-ind-1)){
        return false;
      }
     return checkPalindrome(str,ind+1);
    
    
}
let result=checkPalindrome("madam",0)
console.log(result);