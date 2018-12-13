// Conditionals decide whether or not pieces of code should run.

if(2+2 === 4){
console.log("Math works!");}

else{console.log("Math is broken.")}

// In the example above, the first thing JavaScript does is evaluate the code inside the parentheses to see if it's true or false. In this case, it checks to see if 2+2 equals 4. It does! That statement evaluates to true, so the code inside the if block runs. If that statement had evaluated to false, the code inside the else block would have run instead.

// You can add as many conditions as you want with else if. In the following example, JavaScript will try each condition in order. As soon as one of them evaluates to true, it will run that code block and skip the rest.

// var time ="afternoon";
var time = "afternoon";
if (time === "morning"){
    console.log("Good morning!");}   
    else if (time === "afternoon"){console.log("Good afternoon!")}   
    else if (time === "evening"){console.log("Good evening!")}    
    else {console.log("Hello!")}
    

// Did you notice the weird looking triple equals sign up there? That wasn't a typo; that's how we compare two values in JavaScript to see if they're equal. Comparison operators always evaluate to true or false.
if(24 === 24){console.log("true")}
else{console.log("false, mang")}

// // Triple equals will check to see if the type and the value are equal
console.log("Hello" === "Hello"); //true
// 24 === "24"; // false


// // Double equals will compare values as if they're the same type, even if they're not. This can get messy, so you should default to triple equals 
// 24 == "24" // true

console.log(3 > 23);


// We can also check to see if things are NOT equal.
var name = "Nick Cage";
   if(name = "Buttercup"){console.log("Dang, mang")}
// logs to console as "Dang, mang"
// Logical Operators
// We can also check to see if more than one condition is true.

var sharpTeeth = true ;
var drinksBlood = false;
if (sharpTeeth || drinksBlood){console.log("Princess of the Night")}
 
// The above doesnt work because 'drinksBlood = false'
// }

// // What if we want non-vamps to be able to drink the blood of the innocent too? This block will run if you have sharp teeth or drink blood. However, if both conditions are false (you're not a sharptooth and the mblood is not drank), the code will not run.



// 1. Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
var likesToTravel= true
if(likesToTravel=true){console.log("Bon Vorage!")}
else{console.log("Enjoy your couch!")}

// 2. Fried Pickles are the Best
var favoriteFood= "pie"
if(favoriteFood==="fried pickles"){console.log("Congratulations, you have good taste!")}
else{console.log("But have you tried fried pickles?")}

// Remember the "=" (equal sign) will fuck you up if you dont use it correctly:
// when checking with [if var] 1 "=" will reassign the value 

if(1 + 1 > 5){console.log("True fact!")}
else{console.log("LIES!")}

if(4 * 5 <= 20){console.log("True fact!")}
else{console.log("LIES!")}

if(6 - 2 >= 0){console.log("True fact!")}
else{console.log("LIES!")}

// var headingElement =
var greeting = "";



var person= {
    name: "Matt",
    prefLang: "Japanese"
};     
if(person.prefLang === "English"){
    greeting =  `Hello, ${person.name}`
}
if(person.prefLang === "Spanish"){
    greeting =  `Hola, ${person.name}`
}
if(person.prefLang === "Japanese"){
    greeting = `Konnichiwa, ${person.name}`
}

document.querySelector('#personal-greeting').innerHTML= greeting;


// Write a conditional that checks for the following:
// If the person's preferred language is English, print "Hello, [name]!" to the "#personal-greeting" element.
// If the person's preferred language is Spanish print "Hola, [name]!" to the "#personal-greeting" element.
// If their preferred language is French, print "Bonjour, [name]!" to the "#personal-greeting" element. (Hint: use document.querySelector and .innerHTML)

var time= "4:30 PM";
var isHungry = true; 
if(time === "7:30 AM" && isHungry){console.log("Time for breakfast")}
else if(time ==="12:00 PM" && isHungry){console.log("Time for lunch!")}
else if(time === "4:30 PM" && isHungry){console.log("Snack away, mang!")}
else{console.log("Have a cookie anyway!")}

var grade= 85
if(grade <= 69){console.log("You got an F")}
else if (grade <=76){console.log("You got a D")}
else if (grade <=84){console.log("You got a C")}
else if (grade <=92){console.log("You got a B")}
else if (grade <=100){console.log("You got an A")}
// 6. Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.