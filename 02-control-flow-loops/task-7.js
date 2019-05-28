var arr = [1,2,3,4];

var sum = 0;

for (num of arr){
    sum += (num % 2 == 0)? num : 0;
}
console.log(sum);