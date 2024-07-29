//Task 1
function sumOfElements(array,ind,len) {
    if(ind==len-1){
        return array[ind];
    }
    return array[ind]+sumOfElements(array,ind+1,len);
}

let arr1=[1,2,3,4,5,10];
console.log(sumOfElements(arr1,0,arr1.length));

//Task 2
function findMax(array,ind,len,max) {
    if(ind==len-1){
        return max;
    }
    if(max<array[ind+1]){
        max=array[ind+1];
        return findMax(array,ind+1,len,max);
    }
}
let arr2=[1,2,3,4,5,10];
console.log(findMax(arr2,0,arr2.length,arr2[0]));