function sumofNum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}


const array = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = sumofNum(array, targetValue);
console.log(result);
