const testArray = [6, 5, 12, 10, 9, 1];

const merge = (leftArr, rightArr) => {
  let leftIndex = 0;
  const leftMaxIndex = leftArr.length - 1;
  let rightIndex = 0;
  const rightMaxIndex = rightArr.length - 1;

  let result = [];

  // We count through the two arrays and compare the values. If one is less than the other,
  // we push the smaller value to the result array and bump up the index to compare again.
  // We repeat this until we run through all elements in either arrays
  while (leftIndex <= leftMaxIndex && rightIndex <= rightMaxIndex) {
    let leftValue = leftArr[leftIndex];
    let rightValue = rightArr[rightIndex];

    if (leftValue <= rightValue) {
      result.push(leftValue);
      leftIndex += 1;
    } else {
      result.push(rightValue);
      rightIndex += 1;
    }
  }

  // If there are still left over elements we did not run through, we add the rest of it
  // to the result index.
  if (leftIndex <= leftMaxIndex) {
    result = [...result, ...leftArr.slice(leftIndex)];
  } else {
    result = [...result, ...rightArr.slice(rightIndex)];
  }

  return result;
};

const mergeSort = (arrayToSort) => {
  let result = arrayToSort;

  // Recursive case, we need to drill down the array to the last elements and then do the compare.
  if (arrayToSort.length > 1) {
    const midPoint = Math.floor(arrayToSort.length / 2);
    const leftArr = arrayToSort.slice(0, midPoint);
    const rightArr = arrayToSort.slice(midPoint);

    const sortedLeft = mergeSort(leftArr);
    const sortedRight = mergeSort(rightArr);
    result = merge(sortedLeft, sortedRight);
  }

  // Base case
  // If array is of size 1, just return it so that in the
  // recursive logic, we just pass this back to initial merge
  return result;
};

console.log(mergeSort([6, 5, 12, 10, 9, 1]));
