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
        console.log(this.make, " braked. New speed: ", this.speed, "km/h");
    }
}
class EV extends car{
    constructor(charge){
        this.charge = charge;
    }
}