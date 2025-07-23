class Parent{
    constructor(){
        console.log("Parent class constructor call...");
    }
}
class Child extends Parent{
    constructor(){
        // super()
        console.log("Child class constructor call...");
        super()
    }
}

new Child();