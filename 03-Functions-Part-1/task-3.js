var f = function(a,b,c){
    for(arg of arguments){
        if (typeof(arg) !== 'number')
            throw new TypeError(`the provided argument ${arg} is not Number type`);
    }
    return (a-b)/c
}

console.log(f(10,'4',3))