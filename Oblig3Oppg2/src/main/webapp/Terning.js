/**
 * 
 */

class Dice {
	
	 constructor(value = null){
        this.value = value;
    }
	
	roll(){
		this.value = Math.floor(Math.random() * 6) + 1;
		return this.value;
	}	
}

class DiceController{
	
	constructor(root = null){
		this.root = root;
		this.run = this.run.bind(this);
		this.rollDice = this.rollDice.bind(this);
		this.outRef = null;
	}
	
	rollDice(){
		const dice = new Dice();
		this.outRef = document.getElementById(this.root).querySelector("*[data-diceoutput]");
		var value = dice.roll();
		this.outRef.innerHTML = value;
	}
	
	run(){
		
		const btRef = document.getElementById(this.root).querySelector("*[data-dicebutton]");
		btRef.addEventListener("click",this.rollDice,true);
		
	}
}
 let controller = new DiceController("root"); 
 document.addEventListener("DOMContentLoaded",controller.run,true); 
 console.log(controller.rollDice()); 