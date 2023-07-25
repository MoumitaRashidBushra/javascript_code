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
