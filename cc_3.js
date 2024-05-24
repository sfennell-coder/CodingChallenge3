/*Scott Fennell U86364709
ISM3232/521
Electric Car Class Implementation Challenge*/

//1.)Additions to cc_2 js code. Extend the car class to create a electric car (ev) class include charge property.

class car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(num){
        this.speed += num;
        console.log(this.make, " accelerated, new speed: ", this.speed, "km/h");
    }
    brake(){
        this.speed -= 5;
        console.log(this.make, " braked, new speed: ", this.speed, "km/h");
    }
}
class EV extends car{
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;
    }
    //2.) Implement a chargeBattery Method and chargeTo argument 
    chargeBattery(chargeTo){
        this.charge = chargeTo;
        console.log(this.make, " battery charged to ",this.charge, "%");
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
console.log(car1.make, " starting at: ", car1.speed, " km/h, charge is ", car1.charge, "%");
console.log("Speed and charge changes:");
car1.accelerate();
car1.chargeBattery(60);
car1.accelerate();
car1.chargeBattery(70);
car1.brake();