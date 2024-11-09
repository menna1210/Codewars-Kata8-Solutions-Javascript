//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation

// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array

function getSum(x){
    if(x == null) return 0;
    return x
    .sort((a,b) =>a-b)
    .slice(1,-1)
    .reduce((acc,current) =>acc+ current ,0)
}
console.log(getSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]))



