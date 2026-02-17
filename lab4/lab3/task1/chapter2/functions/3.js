function min(a, b) {
    let a = prompt('Choose your first number', '');
    let b = prompt('Choose your second number', '');

    if(a < b) return a;
    else return b;
}
//return a < b ? a : b