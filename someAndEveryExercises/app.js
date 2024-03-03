/* hasOddNumber */

function hasOddNumber(arr) {
    return arr.some(function (num) {
        return num % 2 !== 0
    })
}

/* hasAZero */

function hasAZero(num) {
    numStr = num.toString()
    return Array.from(numStr).some(function (val) {
        return numStr.includes("0")
    })
}

/* hasOnlyOddNumbers */

function hasOnlyOddNumbers(arr) {
    return arr.every(function (num) {
        return num % 2 !== 0
    })
}

/* hasNoDuplicates */

function hasNoDuplicates(arr) {
    return arr.every(function (val, idx) {
        return arr.indexOf(val) === idx;
    });
}

/* hasCertainKey */

function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return val.hasOwnProperty(key);
    });
}

/* hasCertainValue */

function hasCertainValue(arr, key, value) {
    return arr.every(function (val) {
        return val[key] === value
    })
}