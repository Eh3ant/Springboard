/* Rest / Spread Operator Exercises */

/* Given this function: */

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

/*   Refactor it to use the rest operator & an arrow function: */

const filterOutOdds = (...nums) => {
    return nums.filter( num => num % 2 === 0 )
}


/* findMin */

const findMin = (...nums) => {
   return nums.reduce((min , num) => {
    if (min < num){
        return min
    } else{
        return num
    }
   })
}

/* mergeObjects */

const mergeObjects = (obj1 ,obj2) => {
    return {...obj1 , ...obj2} ;
}


/* doubleAndReturnArgs */

const doubleAndReturnArgs = (arr , ...val) => {
    const double =  val.map(val => val *2)
    return [...arr , ...double]

}

/* Slice and Dice! */

const removeRandom = (items) => {
    const idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1 , array2) => {
    return [...array1 , ...array2]
}


const addKeyVal = (obj , key , val) => {
    return {...obj , [key] : val }
}


const removeKey = (obj , key) => {
    newObj = {...obj}
    delete newObj[key]
     return newObj
}


const combine = (obj1,obj2) =>{
    return {...obj1 , ...obj2}
}


const update = (obj , key , val) => {
    newObj = {...obj}
    newObj[key] = val
    return newObj
}