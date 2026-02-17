let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt("Your first number", 0);
        this.b = +prompt("Your second number", 0);
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());