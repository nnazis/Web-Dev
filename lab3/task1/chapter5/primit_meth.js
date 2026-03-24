let str = "Hello";
str.test = 5;
alert(str.test);
// In strict mode, writing into it is an error.
// Otherwise, the operation with the property is carried on, 
// object gets test property, but after that the “wrapper object” disappears, 
// so in the last line str has no trace of the property.