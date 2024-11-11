//Can you find the needle in the haystack?
 
function getNeedle(needle){
    for(let i =0; i<=needle.length ; i++){
        if(needle[i] === 'needle'){
            console.log(`needle is find at index ${i}`)
        }
    }
}
console.log(getNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))