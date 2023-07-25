// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.




function find2Small(a) {
    if (a.length < 2) {
        throw new Error("at least two elements.");
    }

    const uniqueArray = [...new Set(a)];

    if (uniqueArray.length < 2) {
        throw new Error("at least two unique elements.");
    }


    uniqueArray.sort((a, b) => a - b);

    return uniqueArray[1];
}


const x = [10, 5, 3, 8, 7, 2, 3, 5];
const result = find2Small(x);
console.log(result);
