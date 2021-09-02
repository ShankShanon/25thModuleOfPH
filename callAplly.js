const normalPerson = {
    firstName: 'Shank',
    lastName: 'Shanon',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary
    }
}
normalPerson.chargeBill(2000);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);