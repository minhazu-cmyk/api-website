const normalPerson = {
    firstName: "rahim",
    lastName: "uddin",
    salary: 29983,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
     chargeBill: function(amount,tips,tax){
         console.log(this)
         this.salary = this.salary-amount-tips-tax;
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

       normalPerson.chargeBill.call(friendlyPerson, 900)  
       console.log(friendlyPerson.salary);   
       normalPerson.chargeBill.call(heroPerson,780,564,87)
       console.log(heroPerson.salary);
      normalPerson.chargeBill.apply(goodPerson, [78,949,94])
      console.log(goodPerson.salary);