/* Reduce */

/* extractValue */

/* const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }] */

function extractValue(arr, key) {
    return arr.reduce(function (personName, currentPerson) {
        personName.push(currentPerson[key])
        return personName
    }, [])
}

/* vowelCount */

function vowelCount(str) {
    const vowels = "iaueo"
    str = str.toLowerCase()
    return Array.from(str).slice("").reduce(function (count, vowel) {
        if (vowels.includes(vowel)) {
            if (!count[vowel]) {
                count[vowel] = 1
            } else {
                count[vowel]++
            }
        }
        return count
    }, {})
}

/* addKeyAndValue */

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (result, person) {
        person[key] = value
        result.push(person)
        return result
    }, [])

}

/* partition */



function partition(arr, callback) {
    return arr.reduce(function (newArr, value) {
        if (callback(value)) {
            newArr[0].push(value)
        } else {
            newArr[1].push(value)
        }
        return newArr
    }, [[], []])
}