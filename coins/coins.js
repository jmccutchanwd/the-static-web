//----- John McCutchan

/*
Counting Coins

Setup

These commands are a helpful quick start. You may choose to ignore them completely 
and create your own directory structure. If you choose to use this recommendation, 
just copy the commands below. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/the-static-web/coins && cd $_
touch index.html
touch coins.js
Instructions

Write a program that will convert a dollar amount to the number of coins that make 
up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

/*--- Global ---*/

var money = 0;
var coin="";

/*--- Functions ---*/

function myFunction() {
    var getAmount = prompt("Please enter a dollar amount");
    getAmount = Number(getAmount);
    console.log(typeof getAmount);
    console.log(getAmount);
    money = getAmount * 100;
    console.log(money);
    
    /*--- Output Amount Entered to #entered ---*/
    coin = "<li>"+" Amount Entered: "+getAmount+"</li>"+"<br>";
    var result = document.getElementById("entered");
	result.innerHTML = coin;
    coinCounter();
}

function coinCounter () {
                         
	var coinPurse = { // Initialize a JavaScript Object to hold the coins
		quarters:0,
		dimes:0,
		nickels:0,
		pennies:0
	};
  	console.log(coinPurse);	
  	for (i = 0; i<= money; i++) { // Quarters
		if (money >= 25) { // test if there are any quarters
	  		coinPurse.quarters += 1; // if so, add a quarter to the coin purse	
	  		money -= 25; // if so, subtract a quarter for this iteration of the loop
	  		console.log(coinPurse.quarters); //testing
	    	console.log("Money quarters " + money); //testing
	    }
	}    
	for (i = 0; i<= money; i++) { // Dimes
		if(money >= 10) {
	    	coinPurse.dimes += 1;
	    	money -= 10;
	    	console.log(coinPurse.dimes); //testing
	    	console.log("Money dimes " + money); //testing
	    }
	}
	for (i = 0; i<= money; i++) {  // Nickels
	    if(money >= 5) {
	    	coinPurse.nickels += 1;
	    	money -= 5;
	    	console.log(coinPurse.nickels); //testing
	    	console.log("Money nickels " + money); //testing
	    }
	}
	for (i = 0; i<= money + 1; i++) { // Pennies
		 console.log("Pennies loop before loop");
	
	    if (money >= 0) {
	    	coinPurse.pennies += 1;
	    	money -= 1;
	    	console.log(coinPurse.pennies); //testing
	    	console.log("Money pennies " + money); //testing
	    }
	    console.log("Pennies loop after loop");
	}
	console.log("The remainder is " + money); //testing
	console.log(coinPurse); //testing
	
	/*--- Output Coins Counted to #coins ---*/
	coin = "<li>"+coinPurse.quarters+" Quarters"+"</li>"+"<br>"+
		   "<li>"+coinPurse.dimes+" Dimes"+"</li>"+"<br>"+
		   "<li>"+coinPurse.nickels+" Nickels"+"</li>"+"<br>"+
		   "<li>"+coinPurse.pennies+" Pennies"+"</li>"+"<br>";

	var result = document.getElementById("coins");
	result.innerHTML = coin;
}

/*--- Complete ---*/


/*--- Strategy during development

//divide amount by quarters subtract from amount(loop counter is returned to coinpurse)
//divide amount by dimes subtract from amount(loop counter is returned to coinpurse)
//divide amount by nickels subtract from amount(loop counter is returned to coinpurse)
//divide amount by pennies(loop counter is returned to coinpurse)

------*/















