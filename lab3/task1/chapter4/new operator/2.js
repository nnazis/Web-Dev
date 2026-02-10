function Accumulator(startingVal) {
    this.value = startingVal;
    this.read = function() {
        this.value += +prompt("Add a number", 0);
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.val);