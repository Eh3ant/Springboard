/* forEach


doubleValues */

function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function (val) {
        newArray.push(val * 2)
    })
    return newArray
}

/* onlyEvenValues */

function onlyEvenValues(arr) {
    newArr = []
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArr.push(val)
        }
    })
    return newArr
}

/* showFirstAndLast */

function showFirstAndLast(arr) {
    newArr = []
    arr.forEach(function (val) {
        const firstChar = val.charAt(0)
        const lastChar = val.charAt(val.lenght - 1)
        newArr.push(firstChar + lastChar)
    })
    return newArr
}

/* addKeyAndValue */

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value
    })
    return arr
}

/* vowelCount */

function vowelCount(str) {
    obj = {}
    vowels = "iouea"
    str = str.toLowerCase()

    Array.from(str).forEach(function (char) {
        if (vowels.includes(char)) {
            if (obj[char]) {
                obj[char]++
            } else {
                obj[char] = 1
            }
        }
    })
    return obj
}


/* Map


doubleValuesWithMap */

function doubleValueWithMap(arr) {
    return arr.map(function (num) {
        return num * 2
    })
}

/* valTimesIndex */

function valTimesIndex(arr) {
    return arr.map(function (val, index) {
        return val * index
    })
}

/* extractKey */

function extractKey(arr, key) {
    return arr.map(function (obj) {
        return obj[key];
    });
}

/* extractFullName */

function extractFullName(arr) {
    return arr.map(function (val) {
        return val.first + " " + val.last
    })
}

/* filter

filterByValue */

function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return val[key]
    })
}

/* find */

function find(arr, value) {
    return arr.filter(function (val) {
        return val === value;
    })[0];
}

/* findInObj */

function findInObj(arr, key, value) {

    const filteredObj = arr.filter(function (val) {
        return val[key] === value
    })
    if (filteredObj.length > 1) {
        return filteredObj[0]
    }
}

/* removeVowels */

function removeVowels(str) {
    vowels = "iaueo"
    str = str.toLowerCase()
    return Array.from(str).filter(function (char) {
        return !vowels.includes(char);
    }).join("");
}

/* doubleOddNumbers */

function double(arr) {
    return arr.filter(function (num) {
        return num % 2 !== 0;
    }).map(function (num) {
        return num * 2;
    });
}