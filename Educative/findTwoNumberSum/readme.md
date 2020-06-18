Problem Statement #
In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.

Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.

Input #
An array and a number value

Output #
An array with two integers a and b ([a,b]) that add up to value

Sample Input #
arr = [1,21,3,14,5,60,7,6]
value = 81
Sample Output #
arr = [21,60]
Illustration #
In the illustration given below, we are given 81 as the number value and when we traverse the whole array we find that 21 and 60 are the integers that add up to 81. If our solution fails to find any two numbers, it should return false;
