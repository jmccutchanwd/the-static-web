//---- John McCutchan

/*

Instructions

Paste the code below into your HTML file.
Take the contents of the sonnet div and place it in a variable
Find and output the starting position of the word "orphans"
Output the number of characters in the sonnet
Replace the first occurance of the string "winter" with "yuletide"
Replace all occurances of the string "the" with "a large"
Set the content of the sonnet div with the new string

*/

var theSonnet = document.getElementById("sonnet").innerHTML;//Take the contents of the sonnet div and place it in a variable
console.log(theSonnet)

var start = theSonnet.indexOf("orphans");//Find and output the starting position of the word "orphans"
console.log(start);

var numOfCharacters = theSonnet.length;//Output the number of characters in the sonnet
console.log(numOfCharacters);

var newSonnet = theSonnet.replace("winter", "yuletide")//Replace the first occurance of the string "winter" with "yuletide"
console.log(newSonnet);

var chgSonnet = newSonnet.split(" the ").join("a large");//Replace all occurances of the string "the" with "a large"
var chgSonnet = newSonnet.split("The ").join("A large ");
console.log(chgSonnet);


document.getElementById("sonnet").innerHTML = chgSonnet;//Set the content of the sonnet div with the new string
