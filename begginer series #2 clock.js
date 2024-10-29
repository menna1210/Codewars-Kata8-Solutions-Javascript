// Beginner Series #2 Clock

function getTime(h,m,s){
    while(0 <= h <= 23 &&0 <= m <= 59 && 0 <= s <= 59){
   let hours = h *60 *60 *1000
   let minutes = m *60*1000
   let seconds = s * 1000
   let time = hours + minutes +seconds  
    console.log(`the time in milliseconds = ${time}`)
    break;
    }
   }
   getTime(0,1,1)