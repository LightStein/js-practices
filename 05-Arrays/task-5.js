const arr = [1, 2, 3];
const acc = 0;


function reduce(arr, func, acc, i=arr.length-1){

    if (!Array.isArray(arr))
        throw new TypeError("provided argument isn't an array");

    if (typeof(func) != 'function'){
        throw new TypeError("provided argument isn't a function");
    }
    if (typeof(acc) != 'number' && typeof(acc) != 'string'){
        throw new TypeError("provided argument isn't a number or string");
    }

    if(i<arr.length){
        return reduce(arr, func, func(acc, arr[i], i, acc), i-1);
    } else {
        return acc;
    }
}


console.log(reduce(arr, function (acc, item, i, arr) {return acc + item}, acc));
