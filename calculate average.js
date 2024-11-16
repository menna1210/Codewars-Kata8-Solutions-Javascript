function find_average(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      let finalAnswer = sum / array.length;
      return finalAnswer;
  
   // return array.reduce((acc, current) => acc + current, 0) / array.length;
  }
  
  console.log(find_average([2, 3, 4, 5]));