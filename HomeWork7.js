//1.	Create an Author class and a Book class.
class Author {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender
	}

	get name() {
		return this._name;
	}
	set name(v) {
		this._name = v;
	}
	get email() {
		return this._email;
	}
	set email(value) {
		this._email = value;
	}
	get gender() {
		return this._gender;
	}
	set gender(value) {
		this._gender = value;
	}
	toString() {
		return `name is ${this.name}, email is ${this.email}, gender is ${this.gender}`;
	}
}

let Jean = new Author("Jean M. Auel", "JeanAuel@adventure.com", "female");


class Book {
	constructor(title, author, price, quantity) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity
	}

	get title() {
		return this._title;
	}
	set title(v) {
		this._title = v;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		this._author = value;
	}

	get price() {
		return this._price;
	}
	set price(v) {
		this._price = v;
	}

	get quantity() {
		return this._quantity;
	}
	set quantity(v) {
		this._quantity = v;
	}

	toString() {
		return `title is  ${this.title}, author is  ${this.author.name}, price is  $${this.price}, quantity is  ${this.quantity}`;
	}

	getProfit() {
		return `${this.price * this.quantity}$`;
	}
}

let CaveBear = new Book("The Clan of the Cave Bear", Jean, 15, 3000000);

// 2.  Create an Account class. Account should have: id, name, balance.

class Account {
	constructor(id, name, balance) {
		this._id = id;
		this.name = name;
		this.balance = balance
	}

	static identifyAccounts(first, second) {
		for(let k in first) {
			if(first[k] != second[k]) {
				return `${first.name} and ${second.name} are not the same.`;
			}
		}
		return `${first.name} and ${second.name} are the same.`;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}
	set name(v) {
		this._name = v;
	}

	get balance() {
		return this._balance;
	}
	set balance(val) {
		this._balance  = val;
	}

	credit(amount) {
		if(amount <= 0) {
			throw new Error("Invalid credit amount, please enter a positive number");
		}
		this._balance += amount;
		return this.balance;
	}

	debit(amount) {
		if(amount > this.balance) return "Amount exceeded balance";
		this.balance -= amount;
		return amount;
	}

	transferTo(anoterAccount, amount) {
		if(amount > this.balance) return "Amount exceeded balance";
		anoterAccount.credit(this.debit(amount));
		return this.balance;
	}

	toString() {
		return `id is ${this.id}, name is ${this.name}, balance is ${this.balance}`;
	}
}

let account1 = new Account(1, "account1", 500);


//3.	Write classes: Person, Student, Staff.

class Person {
	constructor(firstName, lastName, gender, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age
	}

	get firstName() {
		return this._firstName;
	}
	set firstName(value) {
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(value) {
		this._lastName = value;
	}

	get gender() {
		return this._gender;
	}
	set gender(value) {
		this._gender = value;
	}

	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value;
	}

	toString() {
		return `I'm ${this.firstName} ${this.lastName}.\nI'm a ${this.age} year old ${this.gender}`;
	}

}

let john = new Person("John", "Doe", "male", 38);

class Teacher extends Person {
	constructor(firstName, lastName, gender, age, program, pay) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.pay = pay
	}

	get program() {
		return this._program;
	}
	set program(value) {
		this._program = value;
	}

	get pay() {
		return this._pay;
	}
	set pay(value) {
		this._pay = value;
	}

	toString() {
		return `${super.toString()}\nI teach ${this._program} and my monthly wage is $${this._pay}`;
	}
}

let william  = new Teacher("william ", "Blake", "male", 30, "English", 12000);
let janet = new Teacher("janet", "cidmar", "female", 29, "math", 9000);


class Student extends Person {
	constructor(firstName, lastName, gender, age, program, year, fee) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.year = year;
		this.fee = fee
	}

	get program() {
		return this._program;
	}
	set program(value) {
		if(!Array.isArray(value)) this._program = [value];
		this._program = value;
	}

	get year() {
		return this._year;
	}
	set year(value) {
		this._year = value;
	}

	get fee() {
		return this._fee;
	}
	set fee(value) {
		this._fee = value;
	}

	passExam(s, grade) {
		if(grade >= 50) {
			this.program.splice(this.program.indexOf(s), 1);
		}
		if(!this.program.length) this.year++;
	}

	toString() {
		return `${super.toString()}\nIn ${this.year} I study ${this.program.join(", ")}.\nMy yearly fee is $${this.fee}`;
	}
}

let johnny = new Student("John", "Adams", "male", 21, ["math", "English"], 2017, 5000);
