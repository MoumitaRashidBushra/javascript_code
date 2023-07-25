// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"



function revStr(inputStr) {
    let revStrCount = '';

    for (let i = inputStr.length - 1; i >= 0; i--) {
        revStrCount += inputStr[i];
    }

    return revStrCount;
}


const input = "hello world";
const output = revStr(input);
console.log(output); 