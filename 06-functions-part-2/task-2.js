
function checkIfFunction(item,i){
    if (typeof item != 'function'){
        throw TypeError(`argument ${i} isn't a Function`)
    }
}


function mix(...parameters){

    loop = (prev, i=0) => {
        if (i<parameters.length){
            checkIfFunction(parameters[i],i)
            res = parameters[i](prev)
            return loop(res,i+1)
        } else {
            return prev
        }
    }
    return loop()
}


x = mix(() => {return 0;},
(prev) => {return prev + 1;},
(prev) => {return prev * 2;}) // 2

console.log(x)