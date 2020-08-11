class person {
    constructor(firstName,secondName,salary){
        this.firstName = firstName;
        this.secondName = secondName;
        this.salary = salary;
    }
}
const heroPerson = new person("hero","balm", 4533);
console.log(heroPerson);
const oldPerson = new person("grand","papa",484);
console.log(oldPerson);