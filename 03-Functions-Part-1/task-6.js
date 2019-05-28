isValid = function(x){
    if (typeof(x) === 'number'){
        return true
    }else
        return false
}

isEven = function(num){
    if (!isValid(num)){
        throw new TypeError(`provided argument is not Number type`);
    }
    else if (num%2 == 0){
        return true
    }else
        return false
}

console.log(isEven(6))