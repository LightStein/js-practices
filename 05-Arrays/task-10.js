const arr = [3,2,1];


function reverse(arr,result = [], i=arr.length-1){
    // check
    if(!Array.isArray(arr))
        throw TypeError("Argument should be an Array")
    else if (arr.length == 0)
    throw Error("provided array is empty")
    // main
    if (i >= 0){
        result.push(arr[i]);
        return reverse(arr, result, i-1);
    } else
        return result;
}

console.log(reverse(arr));