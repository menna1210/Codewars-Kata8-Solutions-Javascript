//Write a method, that will get an integer array as parameter and will process every number from this array.

function squareOrSquareRoot(array) {
    //   let newArray = [];
    //   for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //       newArray.push(Math.sqrt(array[i]));
    //     } else {
    //       newArray.push(array[i] * array[i]);
    //     }
    //   }
    //   return newArray;
  
    return array.map((number) =>
      Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number
    );
  }
  console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));