// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19



function sum(a) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sum += a[i];
        }
    }

    return sum;
}


const x = [2, -5, 10, -3, 7];
const result = sum(x);
console.log(result); 
