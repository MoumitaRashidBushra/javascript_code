// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findNumber(x) {
    const againNumber = {};

    for (const number of x) {
        againNumber[number] = (againNumber[number] || 0) + 1;
    }

    let repNumber = x[0];

    for (const number of x) {
        if (againNumber[number] > againNumber[repNumber]) {
            repNumber = number;
        }
    }

    return repNumber;
}

const m = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findNumber(m);
console.log(result);
