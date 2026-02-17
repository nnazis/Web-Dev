let schedule = {};
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));