/*
Напишете Car конструктор кој ги иницијализира "model" и "milesPerGallon" од аргументи.
Сите инстанци изградени со Car треба да го иницијализираат "tank" на 0 и "odometer" на 0.
Дајте им на автомобилите можност да се наполнат со методот "fill(gallons)". Додадете ги галоните во резервоарот "tank".
Автомобилите треба да имаат способност да возат на дадено растојание. Извозеното растојание треба да предизвика "odometer" да се покачи и да предизвика "tank" да се намали земајќи го предвид "milesPerGallon". 
Автомобил на кој му снемало гориво додека вози не може да вози повеќе. Методот "drive()" во тој случај треба да испечати "Vehicle ran out of gas after driving X miles. Vehicle now has X miles on the odometer and Y gallons of gas.". Во спротивно, треба да испечати "Vehicle has X miles and Y gallons left.".
 */

class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        const possibleDistance = this.tank * this.milesPerGallon;

        if (distance <= possibleDistance) {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
            return `Vehicle has ${this.odometer} miles and ${this.tank} gallons left.`;
        } else {
            this.odometer += possibleDistance;
            this.tank = 0;
            return `Vehicle ran out of gas after driving ${possibleDistance} miles. Vehicle now has ${this.odometer} miles on the odometer and ${this.tank} gallons of gas.`;
        }
    }
}

// Testing
const car1 = new Car("Toyota", 25);
car1.fill(10);
console.log(car1.drive(100)); 

const car2 = new Car("Honda", 30);
car2.fill(5);
console.log(car2.drive(200));