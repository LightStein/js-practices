let numArr = [1, 2, -4, 3, -9, -1, 7];

var f = function(arr){
    let result = [];

    for(num of numArr){

        if (!isValid(num))
            throw new TypeError(`provided list item ${num} is not Number type`);
        else if(isPositive(num)){
            result.push(num);
        }
    }
    return result;
}

isValid = function(x){
    if (typeof(x) === 'number'){
        return true
    }else
        return false
}

isPositive = function(x){
    if (x>0){
        return true
    }else
        return false
}


console.log(f(numArr))