
function checkIfFunction(item,i){
    if (typeof item != 'function'){
        throw new TypeError(`argument ${i} isn't a Function`)
    }
}


function mix(...parameters){
    let errors = []
    loop = (prev, i=0) => {
        if (i<parameters.length){
            let success = true
            try{
                checkIfFunction(parameters[i],i)
            } catch(err){
                success = false
                errors.push({
                    name: err.name,
                    message: err.message,
                    stack: 'every argument should be a function',
                    level: i
                })
            } if(success){
                res = parameters[i](prev)
                return loop(res,i+1);
            }else{
                return loop(prev,i+1);
            }
            
            
        } else {
            return prev
        }
    }
    return {errors: errors, value: loop()}
}


x = mix(() => {return 0;},
(prev) => {return prev + 1;},
(prev) => {return prev * 2;},
"Hello") // 2

console.log(x)