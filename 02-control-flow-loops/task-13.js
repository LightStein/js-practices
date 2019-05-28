arr = [-1, -2, 5, 10]
var sum = 0;

for (num of arr){
    sum += (num >=0)? num : 0;
}
console.log(sum);