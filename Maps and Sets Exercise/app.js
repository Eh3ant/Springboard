/* Maps and Sets Exercise */

/* Quick Question #1 */

/* What does the following code return? */

new Set([1,1,2,2,3,4]) //{1,2,3,4}

 /* Quick Question #2 */

/* What does the following code return? */

[...new Set("referee")].join("") // ["ref"]

/* Quick Questions #3 */

/* What does the Map ***m*** look like after running the following code? */

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

const hasDuplicate = (arr) => {
    const newArr = new Set(arr)
    if (newArr.size < arr.length) {return true
} else {
    return false
}
}

/* vowelCount */

const vowelCount = str => {
    const vowels = "iaoue"
    const vowelMap = new Map() 
    for (let char of str.toLowerCase()){
       if( vowels.includes(char)){
            if (vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) +1 )
            } else {
                vowelMap.set(char , 1)
            }
       }
    }
    return vowelMap
}
