function pow(x, n) {
    let result = x;

    for(let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt('Enter your x value', '');
let n = prompt('Enter your n value', '');

if(n < 1) {
    alert('Invalid number');
} else {
    alert(pow(x, n));
}