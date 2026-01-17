class Person {
    constructor() {
        console.log("enter parent constructor")
        this.species = "home species";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor")
        super(); // to call parent class constructor
        this.branch = branch;
        console.log("exit child constructor")
    }
    work() {
        console.log ("solve problems");
    }
}

let himanshuObj = new Engineer("Cs");
himanshuObj.work();
himanshuObj.eat();