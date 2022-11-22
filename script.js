
// JAVASCRIPT KEYWORDS
// var	Declares a variable
// let	Declares a block variable
// const	Declares a block constant
// if	Marks a block of statements to be executed on a condition
// switch	Marks a block of statements to be executed in different cases
// for	Marks a block of statements to be executed in a loop
// function	Declares a function
// return	Exits a function
// try	Implements error handling to a block of statements

var passwordBtn = document.querySelector ("#generate");

var questionLength;
var questionLowerCase; 
var questionUpperCase;
var questionNumber;
var questionSpecialCharacter;
var answers;


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = [" ", "!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","\:","^","_","`","{","|","}","~"]; 

function generatedPassword () {
    var password = generatePasswordBtn();
    var passwordOut = document.querySelector ("#password");
    passwordOut.value = password;
}
//event listener for generate password 
passwordBtn.addEventListener("click", generatedPassword);

function generatePasswordBtn() {
    questionLength = prompt("How many characters would you like your password? Choose between 8-128");

    if (!questionLength) {
        alert ("Please enter value");
    } else if (questionLength < 8 || questionLength > 128) {
        alert ("Please select between 8-128") //might need to change aler to prompt
    } else {
        questionLowerCase=confirm("Would you like your password to have lower case characters?");
        questionUpperCase=confirm("Would you like your password to have upper case characters?");
        questionNumber= confirm ("Would you like your password to contain number characters?");
        questionSpecialCharacter=confirm("Would you like your password to contain special characters?");

};
if (!questionLowerCase && !questionUpperCase && !questionNumber && !questionSpecialCharacter) {
    answers = alert("You must select options");

    else if (questionLowerCase && questionUpperCase && questionNumber && questionSpecialCharacter) {
        answer = lowerCase.concat(upperCase, number, specialCharacter)
    } else if 
}



















var noSelections = [];

for (var i = 0; i <  questionLength; i++) {
    var allSelections = answers [Math.flooe(Math.random()* answers.length)];
    noSelections.push(allSelections);
    
}

var password = noSelections.join ("");
return password;