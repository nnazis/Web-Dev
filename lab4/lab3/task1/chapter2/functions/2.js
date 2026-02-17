function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?'); 
}
function checkForAge(age) {
    return (age > 18) || confirm('Did parents alllow you?');
}