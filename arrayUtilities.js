//The function groupArrayElements takes an array, and an integer N 
//and splits the given array into N sub arrays as evenly as possible
function groupArrayElements(arr, N) {
    const givenArray = arr
    const numberOfElementsPerGroup = Math.ceil((givenArray.length/N))

    let returnedArray = new Array(N).fill([])

    for(var i = 0; i < returnedArray.length; i++) {
        let intermediateArray = []
        for(var j = 0; j < numberOfElementsPerGroup; j++) {
            if (!( ((i*numberOfElementsPerGroup) + j) > (givenArray.length-1))) {
                intermediateArray.push(givenArray[(i*numberOfElementsPerGroup) + j])
            }  
        }
        returnedArray[i] = [...intermediateArray]
    }

    return returnedArray;
}

module.exports = { groupArrayElements }