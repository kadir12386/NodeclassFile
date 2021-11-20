console.log("👋 hello world 🌎");
// const sum = (a, b) => a + b;
// console.log(sum(5, 10));
//max marks
// const marks = [60, 90, 75, 80];
// console.log(Math.max(...marks));

// const inputValues = process.argv;
// console.log(inputValues);

// const sum = (a, b) => parseInt(a) + parseInt(b);
// console.log(sum(inputValues[2], inputValues[3]));

const [, , first, second] = process.argv;
const sum = (a, b) => parseInt(a) + parseInt(b);
console.log(sum(+first, +second));
