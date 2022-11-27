class User{
	constructor(firstName,lastName){
		this.firstName= firstName;
		this.lastName = lastName;
	}
	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

class Customer extends User{
	constructor(firstName,lastName,membership){
		super(firstName,lastName);
		this.membership = membership;
	}
	getFullName(){
		const parentRes= super.getFullName();
		return `${parentRes}, memberrShip: ${this.membership}`;
	}
}

const customer = new Customer('Vovka','Orlovsky','basic');
console.log(customer.getFullName());