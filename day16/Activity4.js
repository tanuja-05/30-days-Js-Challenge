//Task 1
function binarySearch(arr,st,ed,target) {
    if(st>=ed){

        return -1;
    }
    let mid = Math.floor((st+ed)/2);
    if(arr[mid]==target){
        
        return mid;
    }
    if(arr[mid]>target){

           return binarySearch(arr,st,mid-1,target);
    }
   if(arr[mid]<target){

    return binarySearch(arr,mid+1,ed,target);

   }
    
}
let arr  =[1,2,3,4,5,6];
console.log(binarySearch(arr,0,arr.length-1,5));

//Task2
function countOccurences(arr,ind,count,target) {
    if(ind==arr.length){
        return count;
    }
    while(ind < arr.length) {
          if(arr[ind]==target){
             return countOccurences(arr,ind+1,count+1,target);
          }
          else{
            return countOccurences(arr,ind+1,count,target);
          }
    }
}
let array  =[1,2,3,5,5,5,4,5,6,5,6,5,6,5];
console.log(countOccurences(array,0,0,5));
