// You have number `n=1000`. Divide it by 2 as many times as long as the result of the division is less than 50.
// What is the number? Count the number of iterations required for this (iteration is a loop pass), 
// and write it to the variable `num`. Show the result to console.

var n = 1000;
var num = 0;
while (n > 50){
    n /= 2;
    num += 1;
}

console.log("iterations: " + num);
console.log("result: " + n);
