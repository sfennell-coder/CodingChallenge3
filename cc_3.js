/*Scott Fennell U86364709
ISM3232/521
Electric Car Class Implementation Challenge*/

//1.)Additions to cc_2 js code. Extend the car class to create a electric car (ev) class include charge property.

class car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(this.makw, " accelerated. New speed: ", this.speed, " km/h");
    }
    brake(){
        this.speed -= 5;
        console.log(this.make, " braked. New speed: ", this.speed, " km/h");
    }
}
class EV extends car{
    constructor(charge){
        this.charge = charge;
    }
    //2.) Implement a chargeBattery Method and chargeTo argument 
    chargeBattery(chargeTo){
        this.charge = chargeTo;
        console.log(this.make, " battery charged to ",this.charge,"%");
    }
    //3.) Override the accelerate method in EV class.Speed Increase 20 and battery change by 1.
    accelerate(){
        super.accelerate(20);
        this.charge -= 1;
        console.log(this.make, " going at ", this.speed, " km/h, with a charge of ", this.charge, "%"); 
    }
}

//4.) Create an EV object using the provided test data and call accelerate, brake, and chargeBattery.
const car1 = new EV('Tesla', 120, 23);
console.log(car1.make, " starting at: ", car1.speed, " km/h, charge is ", car1.chargeBattery, "%");
console.log("Speed changing:\n", car1.accelerate(), "\n", car1.chargeBattery(), "\n", car1.accelerate(), "\n", car1.chargeBattery(), "\n", car1.brake());