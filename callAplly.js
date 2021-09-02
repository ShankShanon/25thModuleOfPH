const normalPerson = {
    firstName: 'Shank',
    lastName: 'Shanon',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 25000,
};

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 20000,
};

//normalPerson.chargeBill();

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);

// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(10000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 100, 3000, 30);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 400, 300]);
console.log(heroPerson.salary);