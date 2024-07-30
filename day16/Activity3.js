//Task 1
function reverseString(str) {
      if(str===""){
        return "";
      }
      return reverseString(str.substr(1))+str.charAt(0);
}
console.log(reverseString("hello"));

//Task 2
function checkPalindrome(str,st=0,ed=str.length) {
    if(sted){
        return true;
    }
    if(str.charAt(st)!=str.charAt(ed)){
        return false;
    } 
       return checkPalindrome(str,st+1,ed-1);
}
console.log(checkPalindrome("aba"));