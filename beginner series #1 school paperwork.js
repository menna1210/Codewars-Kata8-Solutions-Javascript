// Beginner Series #1 School Paperwork

// first solution 

  // get values from user
  let numOfClassmates = Number(prompt('please enter number of classmates'))
  let numOfPages = Number(prompt('please enter number of pages'))
 // check the values
  if(numOfClassmates<0 || numOfPages<0){console.log('0')}
  else if(numOfClassmates>0 && numOfPages>0){
  let blankPages = numOfClassmates * numOfPages
 
  console.log(`number of classmates is ${numOfClassmates} and number of pages is ${numOfPages} so the blank pages is ${blankPages}`)}
 
 //  second solution
 
 // create function to calaculate the number of bages
 function numOfPagess (){
 // get values from user
     let numOfClassmates1 = Number(prompt('please enter number of classmates'))
     let numOfPages1 = Number(prompt('please enter number of pages'))
 // check the values
     if(numOfClassmates1<0 || numOfPages1<0){console.log('0')}
 
     else if(numOfClassmates1>0 && numOfPages1>0){
     let blankPages1 = numOfClassmates1 * numOfPages1
     console.log(`number of classmates is ${numOfClassmates1} and number of pages is ${numOfPages1} so the blank pages is ${blankPages1}`)}
 }
 numOfPagess()