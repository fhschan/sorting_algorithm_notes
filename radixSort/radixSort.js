function log(number, base) {
  return Math.log(number) / Math.log(base);
}

// If we take the number, divided by base to the power of the digit, and then modulate it, this should give
// us the digit.
// eg. 235, at digit 0, as a base 10, it should return us 5.
function getNumberByDigitPosition(number, digit, base) {
  return Math.floor((number / base ** digit) % base);
}

// See RedixSort.md for an explanation
function countingSort(arrToSort, digitToSortBy = 0, base = 10) {
  const tempStorageArr = new Array(base).fill(0);
  const sortedArr = new Array(arrToSort.length).fill(0);

  arrToSort.forEach((number) => {
    const numberByDigit = getNumberByDigitPosition(number, digitToSortBy, base);
    tempStorageArr[numberByDigit] += 1;
  });

  for (let i = 1; i < tempStorageArr.length; i += 1) {
    tempStorageArr[i] = tempStorageArr[i] + tempStorageArr[i - 1];
  }

  const maxIndex = arrToSort.length - 1;
  for (let i = maxIndex; i >= 0; i -= 1) {
    const number = arrToSort[i];
    const numberByDigit = getNumberByDigitPosition(number, digitToSortBy, base);
    tempStorageArr[numberByDigit] -= 1;
    sortedArr[tempStorageArr[numberByDigit]] = number;
  }

  return sortedArr;
}

// See RadixSort.md for an explanation
function radixSort(arrToSort, base = 10) {
  const maxValueInArray = Math.max.apply(null, arrToSort);
  const maxNumberOfDigits = Math.floor(log(maxValueInArray, base) + 1);
  let result = [...arrToSort];

  for (let i = 0; i < maxNumberOfDigits; i += 1) {
    result = countingSort(result, i, base);
  }

  return result;
}

const test = [9, 3, 1, 4, 5, 7, 7, 2, 20, 55];
console.log("@@@ radix sort", radixSort(test, 10));
