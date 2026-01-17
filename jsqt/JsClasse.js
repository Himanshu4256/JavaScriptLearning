class ToyotaCar {

    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop")
    }

    setBrand(brand){
        this.setBrand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");
console.log(fortuner);
let lexus = new ToyotaCar();
lexus.setBrand("Lexus");
