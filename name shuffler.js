// Write a function that returns a string in which firstname is swapped with last name.

// Solution

function nameShuffler(str) {
    //Shuffle It
    return str.split(" ").reverse().join(" ");
  }
  
  console.log(nameShuffler("Ahmed Ibrahem"));