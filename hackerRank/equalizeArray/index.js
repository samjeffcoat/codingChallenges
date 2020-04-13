function equalizeArray(arr) {
    // initialize an object

    let obj = {}
    for (let i of arr){

        //loop through our array and give key value pairs to find how many values are in each number
        if(obj[i]) {
            obj[i]++
        } else {
            obj[i]= 1
        }
    }
    const newArray = Object.values(obj);
    const maxValue = Math.max(...newArray)
    return arr.length - maxValue
}

https://www.youtube.com/watch?v=LWlp1vs3pJM
