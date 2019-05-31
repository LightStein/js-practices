

function arrayFill(item, qt, result = []){
    // check
    if (typeof item != 'string' && typeof item != 'number' && typeof item != 'object'){
        throw TypeError("First argument must be one of these types: String, Number, Object")
    }
    else if(typeof qt != 'number')
        throw TypeError("Second argument should be a Number")

    // main
    if (qt > 0){
        result.push(item);
        return arrayFill(item, qt-1, result);
    } else
        return result;
}

console.log(arrayFill('x',5));