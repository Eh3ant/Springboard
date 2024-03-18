/* Part one */ 

class Vehicle {
    constructor(make,model,year){
        for(let type of [make,model]){
            if (typeof type !== "string"){
                throw new Error ("Enter valid data!")
            }
        }
        if (!Number.isFinite(year)){
            throw new Error ("Enter a number for year")
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString(){
        const {make,model,year} = this
        return `The vehicle is a ${make} ${model} from ${year}`
    }
}

/* Part Two */
class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}

/* Part Three */

class Motorcycle extends Car {
    constructor(make,model,year){
        super(make,model,year)
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}

/* Part Four */

class Garage {
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity
    }
    add(newVehicles){
        if(!(newVehicles instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicles);
        return "Vehicle added!"
    }
}