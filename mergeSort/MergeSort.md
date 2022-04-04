# Merge sort

Merge sort uses the divide and conquer method, where we split the array down the middle and continue doing that for the split arrays until we reach the last element of all the arrays.

At that point, the left and right arrays are compared and placed in the result array in order and returned.

```
eg. Unsorted array: [3, 1 , 5, 4, 6]

1. Split the array down the middle where possible so there are two arrays
[3, 1] | [5, 4]

2. Repeat until we get one element in each array

[3] [1] | [5] [4]

3. We then start comparing the values and return it

[1, 3] | [4, 5]

[1, 3, 4, 5]


```