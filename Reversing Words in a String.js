//You need to write a function that reverses the words in a given string. Words are always separated by a single space.

function reversed(value){
return value.split(" ").reverse().join(" ")
}
console.log(reversed("hello world"))