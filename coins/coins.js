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
var money = 0;
var coin="";

function myFunction() {
    var getAmount = prompt("Please enter a dollar amount");
    console.log(getAmount);
    money = getAmount * 100;
    console.log(money);
    coin = "<li>"+" Amount Entered: "+getAmount+"</li>"+"<br>";
    var result = document.getElementById("entered");
	result.innerHTML = coin;
    coinCounter();
}

function coinCounter () {
                         
	var coinPurse = { // Initialize a JavaScript object to hold the coins
		quarters:0,
		dimes:0,
		nickels:0,
		pennies:0
	};
  	console.log(coinPurse);	
  	for (i = 0; i<= money; i++) {
		if (money >= 25) {
	  		coinPurse.quarters += 1;		
	  		money -= 25;
	  		console.log(coinPurse.quarters);
	    	console.log("Money quarters " + money);
	    }
	}    
	for (i = 0; i<= money; i++) {
		if(money >= 10) {
	    	coinPurse.dimes += 1;
	    	money -= 10;
	    	console.log(coinPurse.dimes);
	    	console.log("Money dimes " + money);
	    }
	}
	for (i = 0; i<= money; i++) {   
	    if(money >= 5) {
	    	coinPurse.nickels += 1;
	    	money -= 5;
	    	console.log(coinPurse.nickels);
	    	console.log("Money nickels " + money);
	    }
	}
	for (i = 0; i<= money + 1; ++i) {
		
	    if (money >= 1) {
	    	coinPurse.pennies += 1;
	    	money -= 1;
	    	console.log(coinPurse.pennies);
	    	console.log("Money pennies " + money);
	    }
	}
	console.log("The remainder is " + money);
	console.log(coinPurse);
	
	coin = "<li>"+coinPurse.quarters+" Quarters"+"</li>"+"<br>"+
		   "<li>"+coinPurse.dimes+" Dimes"+"</li>"+"<br>"+
		   "<li>"+coinPurse.nickels+" Nickels"+"</li>"+"<br>"+
		   "<li>"+coinPurse.pennies+" Pennies"+"</li>"+"<br>";

	var result = document.getElementById("coins");
	result.innerHTML = coin;
}



// currentBand += "<li>"+bands[i]+"</li>";// Add the band names into the correct <div>
//     currentVeggie += "<li>"+vegetables[i]+"</li>";// Add the veggie names into the correct <div>
//     console.log(currentBand + currentVeggie);//THis is to see whats happening behind the scenes.
// }

// var bandElement = document.getElementById("boy-bands");//creates a Var to equal the OL that is 
// 													   //tagged in the html
// bandElement.innerHTML = currentBand;//creates the LI list as looped from the For loop




// var coins = coinCounter();
// console.log();



//divide amount by quarters subtract from amount(loop counter is returned to coinpurse)
//divide amount by dimes subtract from amount(loop counter is returned to coinpurse)
//divide amount by nickels subtract from amount(loop counter is returned to coinpurse)
//divide amount by pennies(loop counter is returned to coinpurse)

















