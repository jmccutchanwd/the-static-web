//----- John McCutchan

/*
Instructions

Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var button = document.getElementById('now');
button.addEventListener('click', sortGrades);
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

function sortGrades(){
	console.log("button clicked");
	for(var i = 0; i < scores.length; i++) {
		// console.log("number " + i);
		if(scores[i] >= 91){
			gradeA += 1;
		}else if(scores[i] >= 81 && scores[i] <= 90){
			gradeB += 1;
		}else if(scores[i] >= 71 && scores[i] <= 80){
			gradeC += 1;
		}else if(scores[i] >= 61 && scores[i] <= 70){
			gradeD += 1;
		}else{
			gradeF += 1;
		}
		
	}
	// an array cannot be passed as an argument without using a prototype, apply() in this case.
	var minGrade = Math.min.apply(null, scores);
	var maxGrade = Math.max.apply(null, scores);
	console.log(minGrade + " " + maxGrade);
	console.log("A:" + gradeA + ", " + "B:" + gradeB + ", " + "C:" + gradeC + ", "
		+ "D:" + gradeD + ", " + "F:" + gradeF);
	document.getElementById("grades").innerHTML = "<h2>" + "Grades by Quantity" + "</h2>" + "<p>" +"A:" + gradeA + ", " + "B:" + gradeB + ", " + "C:" + 
		gradeC + ", " + "D:" + gradeD + ", " + "F:" + gradeF + "</p>" + "<h3>" + "The Lowest Grade" + "</h3>" + 
		"<p>" + minGrade + "</p>" + "<h3>" + "The Highest Grade" + "</h3>" + "<p>" + maxGrade + "</p>"
}



/*
How many of each grade?**

Math.min()
Math.max()

What is the lowest grade?
What is the highest grade?

Math.max.apply(null, numbers) // 4
Math.min.apply(null, numbers) // 1
*/
 










