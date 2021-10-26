/**
 * 
 */
class Person {
 /**
 * @param {String} name - Navnet til personen
 * @param {Date} borndate - Fødselsdato til personen
 */
 constructor(name = null, borndate = null) {
 this.name = name;
 this.borndate = bordate;
 }
 /**
 * Get age of person
 * @public
 */
 age() {
 const now = new Date ();
 return now.getFullYear() - this.borndate.getFullYear();
 }
}

class Dice {
	// Public felt
	value = null;
	
	roll(){
		this.value = Math.floor(Math.random() * 6) + 1;
	}
	
	
}

class DiceController{
	// Public felt
	btRef.addEventListener("click",this.rollDice,true);
	
	constructor(){
		this.run = this.run.bind(this);
		this.rollDice = this.rollDice.bind(this);
	}
	
	
	rollDice(){
		btRef=document.getElementById(this.root).querySelector("*[data-dicebutton]");
		dice.roll();
		this.diceoutput.innerText = dice.value;
		
	}
	
}