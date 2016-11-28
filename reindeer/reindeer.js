// ---- John McCutchan

/*
Colored reindeer

Setup

These commands are a helpful quick start. You may choose to ignore them completely and create 
your own directory structure. If you choose to use this recommendation, just copy the commands 
below, open a terminal window on your host machine (i.e. do not be logged into the Vagrant machine), 
and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/the-static-web/reindeer && cd $_
touch index.html
touch reindeer.js

Instructions

Paste the following code into the <body> of the HTML file.

<div id="coloredReindeer"></div>
Paste the following code into your JavaScript file.

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", 
"Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
Your task is to loop through all the reindeer in the array, and add the name of the reindeer to 
the single HTML <div> element provided. The name of the reindeer should be prepended with the 
corresponding color from the other array.

For example:

Blue Dasher
Red Dancer
etc...
Contact GitHub API Training Shop Blog About

*/




var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", 
	"Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var holder="";

for (i=0; i < reindeer.length; i++ ) {
	var newReindeer = colors[i] + " " + reindeer[i];

	var list = newReindeer;
	holder += "<li>"+list+"</li>"

	console.log(list);
}
var hohohoElement = document.getElementById("coloredReindeer");
hohohoElement.innerHTML = holder;





// complete.




