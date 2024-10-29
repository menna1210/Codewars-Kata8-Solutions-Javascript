// Square(n) Sum function

// description(Complete the square sum function so that it squares each number passed into it and then sums the results together.)

let arr =[2,4,5,6,7,8,9]
function sumNumbers (){
    let newArray =[];
    let sum =0;
    for(let i =0; i<= arr.length-1 ; i++){
     let num = Math.pow(arr[i],2)
     newArray.push(num)
   
    }
    for(i=0 ; i<=newArray.length-1 ; i++){
         sum += newArray[i]
       
    }
    console.log(newArray)
    console.log(sum)
}
sumNumbers()