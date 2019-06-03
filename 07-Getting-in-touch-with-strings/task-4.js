function extractCurrencyValue(value){
    if (typeof value != 'string'){
        throw new Error ("provided argument isn't a string")
    }
    return value.substring(1) * 1 ;
}

res = extractCurrencyValue('$120');
console.log(res);