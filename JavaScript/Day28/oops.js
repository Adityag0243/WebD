class Student{
    name;
    age;
    
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    printData(){
        console.log(`name is : ${this.name}, age is: ${this.age}`)
    }
}

let std = new Student("Aditya", 21, 'mr.adityag123@gmail.com');

std.printData()
console.log(std);