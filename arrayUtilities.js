//The function groupArrayElements takes an array, and an integer N 
//and splits the given array into N sub arrays as evenly as possible
function groupArrayElements(arr, N) {
    const givenArray = arr
    let numberOfElementsPerGroup = Math.ceil((givenArray.length/N))

    if ((givenArray.length % N !== 0) && (numberOfElementsPerGroup !== 1)) {
        if (givenArray.length % numberOfElementsPerGroup == 0) {
            numberOfElementsPerGroup -= 1
        }
    }

    let returnedArray = new Array(N).fill([])

    returnedArray.map((_,i) => {
        if (i !== (returnedArray.length-1)) {
            returnedArray[i] = givenArray.slice(i*numberOfElementsPerGroup, (i+1)*numberOfElementsPerGroup)
        } else {
            returnedArray[i] = givenArray.slice(i*numberOfElementsPerGroup, givenArray.length)
        }
    })

    return returnedArray;
}

module.exports = { groupArrayElements }