const arr = [1,2,3];



function forEach(arr, fun){
    console.log(typeof(fun))

    if (!Array.isArray(arr))
        throw new TypeError("provided argument isn't an array");

    if (typeof(fun) !== 'function')
        throw new TypeError("provided argument isn't a function");

    for (let x=0; x<arr.length; x++)
        fun(arr[x], x, arr)
}

forEach(arr, function(item, i, arr) {console.log(item*2)});