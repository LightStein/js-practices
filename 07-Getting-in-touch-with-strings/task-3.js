function truncate (string, maxlength){
    if (string.length > maxlength){
        return (string.substring(0,maxlength-3) + '...');
    } else{
        return string;
    }
}


res = truncate('I wanna to say next thing about this topic', 22);

console.log(res);