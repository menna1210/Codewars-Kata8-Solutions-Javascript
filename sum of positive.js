// You get an array of numbers, return the sum of all of the positives ones.

function sumOfPositives(x){
    return x.filter((x)=> x > 0).reduce((acc,current ) => acc+current,0)
}
console.log(sumOfPositives([1,10,-5,-4,1]))