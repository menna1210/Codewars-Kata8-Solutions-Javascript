//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

function playBanjo(name){
    return name[0] === "R" || name[0] === "r"
       ? `${name} plays banjo`
        : `${name} does not pLays Banjo`;
}
console.log(playBanjo("Rana"))