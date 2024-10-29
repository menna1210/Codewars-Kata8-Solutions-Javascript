// Remove First and Last Character
// description (It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.)
let removeChar = function(str){
    if (str.length<= 2){
        console.log(`${str} is two charctares`)
    }
let text = str.substring(1, str.length-1);
 console.log(text)
}
removeChar("hello world");
removeChar("AA")
