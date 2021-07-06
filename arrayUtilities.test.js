const { expect } = require('@jest/globals');
const { groupArrayElements } = require('./arrayUtilities')

//This is the testing suite for the groupArrayElements function
describe('groupArrayElements', () => {
    it('should return an array with N sub arrays', () => {
        const givenArray = [1,2,3,4,5,6,7,8,9,10]
        const N = 3
        
        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expect the let of the returned array is equal to N
        expect(groupArrayElementsResult.length).toBe(3)
    });

    it('should return an array with N sub arrays whose total length adds up to the length of the original array', () => {
        const givenArray = [1,2,3,4,5]
        const N = 3
        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expects that the outer array contains N internal arrays where N is the given integer (3)
        expect(groupArrayElementsResult.length).toBe(N)

        //Expects that the total length of the N internal arrays is the same as the original array
        let internalArrayLengthTotal = 0
        groupArrayElementsResult.forEach(subArray => {
            internalArrayLengthTotal += subArray.length
        });
        expect(internalArrayLengthTotal).toBe(givenArray.length)
    });


    it('should account for the length of the given array being divisible by N', () => {
        const givenArray = [1,2,3,4,5,6]
        const N = 2
        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expects that the outer array contains N internal sub arrays
        expect(groupArrayElementsResult.length).toBe(N)

        //Expects that total length of all sub arrays equals the length of the given array
        let internalArrayLengthTotal = 0
        groupArrayElementsResult.forEach(subArray => {
            internalArrayLengthTotal += subArray.length
        });
        expect(internalArrayLengthTotal).toBe(givenArray.length)
    });

    it('should handle the given array having a length of 0', () => {
        const givenArray = []
        const N = 3
        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expects that the outer array contains N internal sub arrays
        expect(groupArrayElementsResult.length).toBe(N)

        //Expects that total length of all sub arrays equals the length of the given array
        let internalArrayLengthTotal = 0
        groupArrayElementsResult.forEach(subArray => {
            internalArrayLengthTotal += subArray.length
        })
        expect(internalArrayLengthTotal).toBe(givenArray.length)
    });

    it('should account for repeating numbers', () => {
        const givenArray = [1,1,2,3,3,4,4,6,6,7,7,7]
        const N = 4

        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expects that the outer array contains N internal sub arrays
        expect(groupArrayElementsResult.length).toBe(N)

        //Expects that the total length of all sub arrays equals the length of the given array
        let internalArrayLengthTotal = 0
        groupArrayElementsResult.forEach(subArray => {
            internalArrayLengthTotal += subArray.length
        })
        expect(internalArrayLengthTotal).toBe(givenArray.length)
    });

    it('should account for numbers not being in order', () => {
        const givenArray = [2,7,3,4,4,5,1,8,9]
        const N = 4

        const groupArrayElementsResult = groupArrayElements(givenArray, N)

        //Expects that the outer array contains N internal sub arrays
        expect(groupArrayElementsResult.length).toBe(N)
        

        //Expects thatthe total length of all sub arrays equals the length of the given array
        let internalArrayLengthTotal = 0
        groupArrayElementsResult.forEach(subArray => {
            internalArrayLengthTotal += subArray.length
        })
        expect(internalArrayLengthTotal).toBe(givenArray.length)
    })
})