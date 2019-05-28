function isprime(n) {
    if (n == 1)
        return false;
    if (n == 2)
        return true;
    if (n == 3)
        return true;
    if (n % 2 == 0)
        return false;
    if (n % 3 == 0)
        return false;

    i = 5;
    w = 2;

    while (i * i <= n){
        if (n % i == 0)
            return false;

        i += w;
        w = 6 - w;
    }
    return true;
}


var res = [];

for (var num = 0; num < 10; ++num) {
    if (isprime(num)) {
        res.push(num);
    }
}

console.log(res);