//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(x){
    let arr =[];
    for(i=0; i < x.length ;i++){
arr.push(x[i]*-1)
    
    }
    return arr;
}
console.log(invert([1, -2, 3, -4, 5]))