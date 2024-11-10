//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function getNegative(number){
    if(number>0){
        return number*-1;
    }
    if(number<0){
        return number
    }
    else(console.log("number is zero!!"))
}
console.log(getNegative(-0.15))