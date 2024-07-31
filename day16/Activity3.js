//Task 1
function reverseString(str) {
      if(str===""){
        return "";
      }
      return reverseString(str.substr(1))+str.charAt(0);
}
console.log(reverseString("hello"));

//Task 2
function checkPalindrome(str,st,ed) {
    if(sted){
        return true;
    }
    if(str.charAt(st)!=str.charAt(ed)){
        return false;
    } 
       return checkPalindrome(str,0,str.length);
}
console.log(checkPalindrome("aba"));