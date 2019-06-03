
function checkSpam(source, example){
    if (typeof(source) != 'string' && typeof(example) != 'string'){
        throw new TypeError("provided argument isn't a string")
    }
    return source.toLowerCase().includes(example);
}

res = checkSpam('pitterXXX@gmail.com', 'xxx');

console.log(res);