/*
Create a class called Car with three properties: company, model, and year. 
The class should have a method called getDescription that returns a string 
in the format "This is a <year> <company> <model>". Instantiate an instance 
of the Car class and call the getDescription method.
*/

class Car {
    company;
    model;
    year;
    constructor(c, m, y) {
        this.company = c;
        this.model = m;
        this.year = y;
    }
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}
const carInstance = new Car("Skoda", "Rapid", 2022);
console.log(carInstance.getDescription());
