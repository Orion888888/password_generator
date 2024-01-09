// Assignment Code
//Variables for the if statements and while loop
var generateBtn = document.querySelector("#generate");
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwLenght = 0;
var userChoices = [];
var result = "";

//This sets up the function that gives the parameters for the password generation.
function generatePassword(){
  while (pwLenght < 8 || pwLenght > 128 || isNaN(pwLenght) || pwLenght == ""){
    pwLenght = prompt("Please choose a password lenght between 8 and 128 characters.")
  }

//This variable defines the first confirm box. lowerCase option. Begins the if statements.
  var lowerConfirm = confirm("Would you like lowercase characters in your password?")
  if (lowerConfirm) {
    userChoices = userChoices.concat(lowerCase)
  }

//This variable defines the second confirm box. upperCase option. Continues if statements.
  var upperConfirm = confirm("Would you like uppercase characters in your password?")
  if (upperConfirm) {
    userChoices = userChoices.concat(upperCase)
  }

//Defines the special characters confirm box.
  var charactersConfirm = confirm("Would you like special characters in your password?")
  if (charactersConfirm) {
    userChoices = userChoices.concat(specialCharacters)
  }

//Defines the numbers confirm box and output.
var numbersConfirm = confirm("Would you like numbers in your password?")
if (numbersConfirm) {
  userChoices = userChoices.concat(numbers)
}

//Allows the program know that if none of the parameters are selected, then the window must reload.
if (!lowerConfirm && !upperConfirm && !charactersConfirm && !numbersConfirm){
  alert("You much pick a least one type of character in order to generate a password.")
}

//

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
