QUESTION DESCRIPTION
Write a function that takes in a non-empty array of distinct integers and a target integer. Your function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. Each inner array containing a single triplet should have all three of its elements ordered in ascending order. The triplets themselves should be ordered in ascending order by the first triplet element. If two triplet elements have the same first element, then they should be ordered such that the smaller second element comes first. If two triplet elements have the same first and second elements, then they should be ordered such that the smaller third element comes first.
If no such triplets can be found in the array, your function should return an empty array.
Example 1:
Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
Example 2:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30 Expected Output: [[6, 9, 15], [7, 8, 15]]
How to Read the Input that is Used to Test Your Implementation
The way HackerRank's platform works, passing in an array of values, say the one above that was used in the example, as input to your implementation would look like the following:
16 <----- The length of the array comes first
19
27
28
33
39
41
46
49
2
5
6
10
13
14
15
17
33 <----- target sum

Note that the first element in the input is not part of the array itself. The first parameter of the input indicates the length of the array (16 elements), then the next 16 pieces of input each specify an element in the array in the prescribed order. The last parameter is the target element to search for.
Also note that the format of the expected output only includes the index of the element in the array, or -1 if the target element is not found in the array. So the expected output of the above input would be:

3 <----- index of the target element in the input array
