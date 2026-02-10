function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}
function showOk(){
    alert('You agreed');
}
function showCancel() {
    alert("You canceled.");
}
ask("Do you agree?", showOk, showCancel);