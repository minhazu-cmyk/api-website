const normalPerson = {
    firstName: "rahim",
    lastName: "uddin",
    salary: 29983,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
     chargeBill: function(amount){
         console.log(this)
         this.salary = this.salary-amount
         return this.salary;
     }
}
// normalPerson.chargeBill(456);
// console.log(normalPerson.salary);
//  console.log(normalPerson);

 const heroPerson = {
    firstName: "hero",
    lastName: "balam",
    salary: 29983,}

    const friendlyPerson = {
        firstName: "sofiq",
        lastName: "islam",
        salary: 9495,}

        const goodPerson = {
            firstName: "monir",
            lastName: "islam",
            salary: 29983,}
    
const heroPersonBill = normalPerson.chargeBill.bind(heroPerson);
heroPersonBill(655);
console.log(heroPerson.salary);

const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonBill(876);
console.log(friendlyPerson.salary);
