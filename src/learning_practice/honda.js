class car {

    speed = 100;

    // constructor(speed) {
    //     this.speed = speed;
    // }

    start() {
        console.log("Car Starts");
    }

    stop() {
        console.log("Car Stops");
    }

    drive() {
        console.log("Car Driving");
    }

}


class honda extends car {
    speed = 100;

    // constructor(speed) {
    //     this.speed = speed;
    // }

    parking() {
        console.log("Honda is Parked"); //Individual Method
    }

    start() {
        console.log("Honda Starts via Keyless option");//Method Overriding
    }

}




class maruti extends car {
    parking() {
        console.log("Maruti is Parking");
    }

    breaks() {
        console.log("Maruti has applied breaks");
    }
}


let car1 = new honda();
let car2 = new maruti();
car1.start();// calliing overridde method
car2.start(); // calling parent class method
car1.drive(); // calling parent class method
car2.drive();// calling parent class method
car1.stop();// calling parent class method
//car1.breaks(); // breaks method only applicable for car2
car2.breaks(); //calling individual method of class maruti
car2.stop();//// calling parent class method
car1.parking();//calling individual class methods
car2.parking();//calling individual class methods