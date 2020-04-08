// Return the First and Last Elements in an Array

// Create a
// function that takes an array of numbers and
// return the first and last elements as a new array.


firstLast([5, 10, 15, 20, 25])➞[5, 25]

firstLast(["edabit", 13, null, false, true])➞["edabit", true]

firstLast([undefined, 4, "6", "hello", null])➞[undefined, null]

function firstLast(arr) {
    const first = arr.shift()
    const last = arr.pop()
    return [first, last]
}

function firstLast(arr) {
    return [arr.shift(), arr.pop()]
}

function firstLast(arr) {
    return [arr[0], arr[arr.length - 1]]
}