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