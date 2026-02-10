let visitor = prompt('Your login:', '');
if(visitor == "Admin") {
    let pass = prompt("Your password: ", '');
    if (pass == 'TheMaster'){
        alert("Welcome!");
    } else if (pass === "" || pass === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (visitor === "" || visitor === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}