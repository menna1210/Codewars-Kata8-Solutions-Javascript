// Find the smallest integer in the array

let arr = [-200, 100 ,45 ,-20 ,-10 ,50 ,71]
let result = arr[0];
for(let i = 0; i<=arr.length-1;i++){
    
    if(arr[i]< result){
        result=arr[i]
    }
}
console.log(`the smallest number is ${result}`);

// another solution

let arr2 =[5,10,-10,-100,5,70,80]
let result2 = Math.min(...arr2)
console.log(`the smallest number is ${result2}`);