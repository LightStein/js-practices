function compose(){
    loop = (func, i=) => {
        return loop(func())
    }
    return loop(arguments);
}

compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'