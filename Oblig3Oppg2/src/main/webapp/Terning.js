/**
 * 
 */

class Dice {
	
	 constructor(){
        this.roll = this.roll.bind(this);

    }
	
	roll(){
		this.value = Math.floor(Math.random() * 6) + 1;
		return value;
	}
	
	
	
}

class DiceController{
	
	
	constructor(){
		this.run = this.run.bind(this);
		this.rollDice = this.rollDice.bind(this);
	}
	
	
	rollDice(){
		
		this.diceoutput.innerText = dice.roll();
		
	}
	
	run(){
		btRef=document.getElementById(this.root).querySelector("*[data-dicebutton]");
		btRef.addEventListener("click",this.rollDice,true);
	}
	
}
 let controller = new DiceController("root"); 
 document.addEventListener("DOMContentLoaded",controller.run,true); 

 console.log(controller.rollDice()); 