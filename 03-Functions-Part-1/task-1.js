function f(num){
    if (typeof(num) !== 'number')
        throw new TypeError("the provided argument is not Number type");
    return num ** 3;
}

console.log(f(5))