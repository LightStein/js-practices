isValid = function(x){
    if (typeof(x) === 'number'){
        return true
    }else
        return false
}


function f(arr, x=0){
    if (x < arr.length){
        if (!isValid(arr[x])){
            throw new TypeError(`list item ${arr[x]} is not Number type`);
        }
        console.log(arr[x])
        return(f(arr,x+1))
    }
}

arr = [1, 2, 3]
f(arr);