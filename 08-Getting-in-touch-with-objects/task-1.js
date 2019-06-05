function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

let Person = {
    get salary(){
        const date = new Date();
        daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
        days = daysInMonth - date.getDate();
        return days > 20 ? "good salary" : "bad salary";
    }
}


p = Person;
console.log(p.salary);