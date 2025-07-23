
// constructor behaviour

function Person(name) {
    this.name = name;
}
const p1 = new Person("Alice"); // ✅ works
console.log(typeof p1)

const ArrowPerson = (name) => {
    this.name = name;
};
// const p2 = new ArrowPerson("Bob"); // ❌ TypeError: ArrowPerson is not a constructor


class Dog{
    constructor(name){
        this.name = name;
    }
}

let d1 = new Dog()
console.log(d1.name);

let d2 = new Dog("Bruno")
console.log(d2.name);
