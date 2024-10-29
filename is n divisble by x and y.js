// Is n divisible by x and y?

//create function to check the numbers is divisable or not

 let divisibleNum = function(n ,x ,y) { 
    // create if statment to check the values   
    if(n<0 || n==0){
        console.log(`number is less than and equal zero`) 
    }
    if (n % x ==0&& n %y==0 && n>0 && n!=0){
        console.log(`number${n} divisible by ${x} and ${y}`)
    } 
    else if (n>0 && n!=0){
        console.log(`number${n} not divisible by ${x} and ${y}`)
    }
    
}
// call function
divisibleNum(3,1,3)
divisibleNum(12,2,6)
divisibleNum(100,5,3)
divisibleNum(12,7,5)
divisibleNum(-12 ,2,6)
divisibleNum(0 ,2,6)
