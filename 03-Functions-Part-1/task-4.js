var f = function(day){
    weekdays = ['orshabati', 'samshabati', 'otxshabati', 'xutshabati', 'paraskevi', 'shabati', 'kvira'];
    for(arg of arguments){
        if (typeof(arg) !== 'number')
            throw new TypeError(`the provided argument ${arg} is not Number type`);
        else if(day > 7 || day < 1){
            throw new Error(`we have only 7 days in a week`);
        }
    }
    return weekdays[day-1];
}

console.log(f(8));