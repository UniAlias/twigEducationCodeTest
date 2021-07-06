# twigEducationCodeTest
This is a public repository to hold the code test for twig education

# What are the requirements?
Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays. Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

# Example Solution
```
groupArrayElements([1,2,3,4,5], 3);
[ [1,2], [3,4], [5] ]
```

# Assumptions
* If the given array is empty (length of 0) then the divided arrays that are returned can have a length of 0
* If the integer N is larger than the length of the array, the returned array will contain N number of arrays with the a single integer from the given array in each until the length of the given array is met and therein the remaining sub arrays will have a length of 0 (see example 2)
* The numbers within the returned arrays do not have to be in the same order as the order of the integers within the given array
* The numbers within the returned arrays do not have to be in order
* None of the arrays that are returned can be of length 0 unless N is larger than the length of the array or the length of the array is 0

# Example Solutions from Assumptions
## Example 1
```
arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
N = 4

result = [ [1,2], [3,4], [5,6], [7,8,9]]
```
## Example 2
```
arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
N = 11

result = [ [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [ ] ]
```
## Example 3
```
arr = [ ]
N = 4

result = [ [ ], [ ], [ ], [ ]]
```


# How to run the project
## Prerequisites
In order to use this function and run the associated tests, the user must clone this repository to their local machine that has Node and NPM installed. In order to install both of these, please see the NodeJS website at https://nodejs.org/en/download/ . 
## Running the project
Once the repository is cloned and the necessary software requirements are installed, the user should *cd* into the newly cloned project. Once within the project, the user should use the command `npm install` which will install all of the necessary software libraries, which for this project is Jest (https://jestjs.io/) that is used for testing. In order to run the tests for this function, the user should use the command `npm test` and the output of the tests should output to the terminal/command prompt.