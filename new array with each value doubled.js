//  new array with each value doubled.

" use strict "     //use strict mode

// craete a function to double each value in array
function doubleArray(arr){
    let newArray =[];
for(let i=0 ; i<=arr.length-1; i++){
    let double = arr[i] * 2
    newArray.push(double)
}
console.log(`the array is [${arr}] and the doubled array is [${newArray}]`)
}
doubleArray([2,5,10,-5,9,42])