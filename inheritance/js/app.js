const protoForObj={
	sayHello(){
		return 'Hello rold';
	},
};

const obj = Object.create(protoForObj,{
	firstName:{
		value: 'Vova',
	},
});

console.log(obj.sayHello());
console.log(obj);

function User(firstName,lastName){
	this.firstName = firstName;
	this.lastName =lastName;
this.sayHello=function(){
		return `Hello ${this.firstName}`;
	};
}

User.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
};



const user = new User('Vovka','Orlovsky');
console.log(user);
console.log(user.getFullName());
console.log(user.sayHello());
//Customer
function Customer(firstName,lastName,membership){
	User.call(this,firstName,lastName);
	// User.apply(this,arguments);
this.membership = membership;
}
Customer.prototype = Object.create(User.prototype);
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMembership = function(){
return this.membership.toUpperCase();
};

const customer = new Customer('Slavik','Kukyrythin','bacic');

console.log(customer);
console.log(customer.sayHello());
console.log(customer.getFullName());
console.log(customer.getMembership());