const arr = [1,2,3,4,5,6];



function filter(arr, fun){
    result = [];
    console.log(typeof(fun))

    if (!Array.isArray(arr))
        throw new TypeError("provided argument isn't an array");

    if (typeof(fun) !== 'function')
        throw new TypeError("provided argument isn't a function");

    for (let x=0; x<arr.length; x++)

        if (fun(arr[x], x, arr))

            result.push(arr[x]);

    return result;        
}


res = filter(arr, function(item, i, arr) {return (item %2 == 0)});

console.log(res)