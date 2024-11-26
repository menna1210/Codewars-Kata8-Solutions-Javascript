function feast(beast, dish) {
    // let beastLetters = beast[0] + beast[beast.length -1];
    // let dishLetters = dish[0] + dish[dish.length -1];
    // if(beastLetters === dishLetters){
    //     return true;
    // }else{
    //     return false;
    // }
    return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1];
}

console.log(feast("brown bear", "bear claw"));