// const arr = [-1,2,3,4,-5,6];
const arr = [-1,-2,-3];


function some(arr, fun){
    result = false;

    if (!Array.isArray(arr))
        throw new TypeError("provided argument isn't an array");

    if (typeof(fun) !== 'function')
        throw new TypeError("provided argument isn't a function");

    for (let x=0; x<arr.length; x++)
        if (fun(arr[x], x, arr))
            result = true;

    return result;        
}


res = some(arr, function(item, i, arr) {return (item > 0)});

console.log(res)