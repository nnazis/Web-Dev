function readNumber() {
    let val = prompt("Enter a number", "");
    if(val == "" || val == null) {
        return null;
    }
    return +val;
}
alert(`The number is: ${readNumber()}`);