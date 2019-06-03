
function checkIfFunction(item,i){
    if (typeof item != 'function'){
        throw new TypeError(`argument ${i} isn't a Function`)
    }
}

function compose (...parameters){
    for(item of parameters){
        checkIfFunction(item)
    }
    funcs = parameters;
    l = parameters.length-1;
    loop = (prev, i=l) => {
        if (i>=0) {
	    return loop(funcs[i](prev),i-1);
	} else
	    return prev;
    }
    return loop
}


res = compose(
     (x)=>{return x+'c'},
     (x)=>{return x+'b'})
     ('a')

console.log(res)
