function sumInput() {
    let numbers = [];
    while(true){
    let user = prompt("Enter value", "");

    if (user === "" || user === null || !isFinite(user)) break;
    numbers.push(+user);
}
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}