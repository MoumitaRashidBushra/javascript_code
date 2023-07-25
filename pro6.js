function generatePass(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    const totalChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let pass = '';

    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * totalChars.length);
        pass += totalChars.charAt(randIndex);
    }

    return pass;
}

// Example: Generate a random password of length 12
const passLength = 12;
const ranPass = generatePass(passLength);
console.log(ranPass);
