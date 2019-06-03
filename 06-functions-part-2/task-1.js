const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};

function bind(func, obj, ...others){
    this.obj = obj;
    let result = obj

    return 
}


const getName = obj.getName;

const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f());
