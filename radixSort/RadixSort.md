# Redix Sort
- Reference 1: https://brilliant.org/wiki/radix-sort/ for visual gif
- Reference 2: https://www.programiz.com/dsa/radix-sort for better step by step explaination

## Summary:
Looks at an array of numbers, takes each digit and sorts them, then repeat for the subsequent digits.
So meaning it will start looking at sorting the elements by the ones digit, then the tens digit, and so on. The trick to this is it requires a `Stable Sort` to help out, and thus we also look at counting sort, which is explained below

## Complexity:
Each pass of the digits is `O(n + k)`, where k is the largest number in the digit. If we are talking about base 10, then it will be always 10, since [0, 1, ... 9].

Depending on the max number of digits in the array, `b`, that means it will repeat b times. So for example, if the max number in the array is 1245, then `b = 4`.

Ultimately, the complexity is `O(b(n+k))`



# Counting Sort
- Reference 1: https://brilliant.org/wiki/counting-sort/ for visual gif
- Reference 2: https://www.programiz.com/dsa/counting-sort for better step by step explaination

Stable sort - meaning the relative order of the elements is preserved whent they have the same value.
eg.
```
Before [1, 0(a), 0(b), 0(c), 3]

After: [0(a), 0(b), 0(c), 1, 3]
```


## Summary:
Sorts by counting the number of times of each unique value in an array
eg. `[5, 3, 1, 3, 2]`

We would create a temporary array to store how many times the value has shown up. The length of this temp array will depend on the largest number in the array + 1 (since we start at 0)
 ```
 0  1  2  3  4  5
[0, 1, 1, 2, 0, 5]
```

We would then store the cumulative sum of the elements in the temp count array, which helps the sort the elements into the corrected index of the stored array

```
[0, 1, 2, 4, 4, 9]
```

Then we would found the value of the original array into the temp array to set it in the result array


## Complexity
Big O: `O(n+k)`, where n is the size of the array, k is the largest number in the array. When looking at my code sample:
1. You can see the first for loop is of size n
2. The second loop is of size base, which is the size of the max value. Since we are looking at each digit separately, for base 10, it's [0, 1, ... 9], which has size 10
3. The last loop is based on the initial size of the array, n

Therefore `n + k + n = 2n + k`, we drop the constants, so it ultimately becomes `O(n+k)`