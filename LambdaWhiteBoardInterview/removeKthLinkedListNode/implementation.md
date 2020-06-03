Write a function that receives as input the head node of a linked list and an integer k. Your function should
remove the kth node from the end of the linked list and return the head node of the updated list.
For example, if we have the following linked list:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) ->
null
The head node would refer to the node (20) . Let k = 4 , so our function should remove the 4th node from the end of the linked list, the node (14) .
So after the function executes, the state of the linked list should be:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null .
If k is longer than the length of the linked list, the linked list should not be changed.
The optimal solution exhibits a runtime complexity of O(n) and a space complexity of O(1).
How to Read the Input that is Used to Test Your Implementation
The way HackerRank's platform works, passing in a linked list, say the one above that was used in the example, as input to your implementation would look like the following:
10 <----- The length of the linked list comes first
20
19
18
17
16
15
14
13
12
11
4 <----- The k parameter indicating which node from the end we want removed
Note that the first element in the input is not part of the linked list itself. The first parameter of the input indicates the length of the linked list (10 elements), then the next 10 pieces of input each specify an element in the linked list in the prescribed order. The last parameter then is the k parameter indicating which node from the end we want removed from the list. Your function then, given the above input, would receive the node containing 20 as its head parameter and 4 as its k parameter.
Also note that the format of the expected output only includes the contents of the linked list. So the expected output of the above input would be:
20
19
18
17
16
15
13
12
11

Just the elements of the linked list and nothing else.
