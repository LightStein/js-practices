isValid = function(x){
    if (typeof(x) === 'number'){
        return true
    }else
        return false
}


getDivisors = function(num){
    results = [];
    if (!isValid(num)){
        throw new TypeError(`provided argument is not Number type`);
    } else if(num <= 0){
        throw new Error(`Number should be greater then 0`);
    }
    for(var x = 1; x < num; x++){
        if (num%x == 0){
            results.push(x);
        }
    }
    return results;
}

console.log(getDivisors(-2));