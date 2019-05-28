function f(){
    let sum = 0;
    for(arg of arguments){
        if (typeof(arg) !== 'number')
            throw new TypeError(`the provided argument ${arg} is not Number type`);
        sum+=arg;
    }
    return sum;
}

x = f(1,2,3);
console.log(x);