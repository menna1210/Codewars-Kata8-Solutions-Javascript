// Count of positives / sum of negatives

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let newArray = [];
function getNum (){
    let result =0
    let result2 =0
    for(let i = 0 ; i<=arr.length-1 ; i++){
        if(arr[i]>0){
            result +=1
            
        }
        if(arr[i]<0){
            result2 +=arr[i]
          
        }
        else if(arr[i]==0 || arr[i] ===null){
            return[];
        }
    }
   
    newArray.push(result)
    newArray.push(result2)
    console.log(`count of postives is ${result} and sum of negative is ${result2} and new array = [${newArray}]`)
}
getNum()