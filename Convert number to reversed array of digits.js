//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

let num = 12345789;
arr = String(num).split("").reverse().map(Number);
console.log(arr);

