const date = new Date();

const person = {
    rate: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    salary: {
        value: 500,
        writable: false,
        enumerable: false,
        configurable: false
    },
    get salary(){
        return (date.getDate() * this.rate) || 0;
    }
    
}

// person.rate = 30;
console.log(person.salary)