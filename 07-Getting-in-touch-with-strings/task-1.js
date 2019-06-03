const upperCaseFirst = word => {
    try{ res = word.charAt(0).toUpperCase() + word.substring(1);
    } catch(err) {
        throw new TypeError("provided argument isn't a string")
    }
    return res;
}

console.log(upperCaseFirst("hello"))