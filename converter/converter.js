/*

Temperature converter

Setup

These commands are a helpful quick start. You may choose to ignore them completely 
and create your own directory structure. If you choose to use this recommendation, 
just copy the commands below. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/the-static-web/converter && cd $_
touch index.html
touch converter.js
Instructions
==========================================================

Write a program that will convert a temperature from fahrenheit to celsius, or from celsius 
to fahrenheit.

In the HTML, have one input field where someone can enter in a temperature.
Create a radio button group where Celsius or Fahrenheit can be selected as the scale 
that the number should be converted to.

Create a block level element that will hold the text of the converted temperature.

Create a button that, when clicked, displays the converted temperature.

Create another button that, when clicked, clears any text in the input field.

Add an event handler to the input field that checks if the user pressed the enter key, 
and if that happens, perform the conversion.

If the temperature is greater than 90F/32C the color of the converted temperature should be red.

If the temperature is less than 32F/0C the color of the converted temperature should be blue.

For any other temperature, the color should be green.

============================================================
function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

*/

/* ids ________
#inputTemp
#cels
#fahr
#convert
#result
*/



/*colors
If the temperature is greater than 90F/32C the color of the converted temperature should be red.

If the temperature is less than 32F/0C the color of the converted temperature should be blue.

For any other temperature, the color should be green.
*/

/*
conversion formulas: F > C [(F - 32) * 5/9],  C > F [(C * 9/5) + 32]
*/



/*--- Global ---*/

// ---- Get a reference to the button element in the DOM
var button = document.getElementById("converter");// button variable
var temp = document.getElementsByName("temp");// var that is celsius or fahrenheight
var convertedTemp = 0;// var that hold the converted number


button.addEventListener("click", determineConverter);// button listener


/*--- This function determines which radio button is selected. ---*/
function determineConverter() {
	var choices = [];// holds celsius or fahrenheight, put here to zero
	inputTemp = document.getElementById("inputTemp").value;// get number from input field
	for(var i = 0; i < 2; i++) {
		if((temp[i].checked) && (temp[i].value === "celsius")){ // radio checked and equals celsius
    		convertedTemp = Math.floor((inputTemp - 32) * (5 / 9)) + "C";// converts # to celsius
    		console.log(convertedTemp + "converted to C");// testing
    		break;
    	} else {
    		convertedTemp = Math.floor((inputTemp * (9 / 5)) + 32) + "F";// else equals fahrenheight
    		console.log(convertedTemp + " converted to F");// testing
    	}
    
    }
    
    if((convertedTemp > "32C") || (convertedTemp > "90F")){ // check for Red conditions
    	console.log("Red Branch");
    	document.getElementById("result").style.color = "red";
    	document.getElementById("result").style.fontSize = "3em";
    }
    if((convertedTemp < "0C") || (convertedTemp < "32F")){ // check for Blue conditions
    	console.log("Blue Branch");
    	document.getElementById("result").style.color = "blue";
    	document.getElementById("result").style.fontSize = "3em";
    }
    if(((convertedTemp >= "0C") || (convertedTemp <= "32C")) || ((convertedTemp >= "32F") || (convertedTemp <= "90F"))){
    	console.log("Neutral Branch");
    	document.getElementById("result").style.color = "black";
    	document.getElementById("result").style.fontSize = "3em";
    }
    document.getElementById("result").innerHTML = convertedTemp;// print to to DIV	
}































