// Assignment code here
//Create variables containing different data types used to create a password
  // Pop up asking how many characters the user would like
  // a place to store how many characters the user wants
var userNumber = window.prompt("How many characters would you like? Pick between 8 and 128.");
var uppercaseLetters = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
var lowercaseLetters = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
var numbers = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
var specialCharacters = ('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', ':', '"', '{', '}', '|', '+', '.', '/', ';', ',', '[', ']');

//Write conditional statements to add in password criteria that the user has selected
//Write for loops to create a password from the variables you created
//Used functions to display the password to the user


  // find a way to not let the user pick less than 8 or more than 128 characters
  // also a notification if they don't match criteria
// Pop up asking if the user wants any upper case letters
var confirmUppercase = window.confirm("Would you like uppercase letters?");

if (confirmUppercase) {
  uppercaseLetters;
}
// Pop up asking if the user wants any lower case letters
var confirmLowercase = window.confirm("Would you like lowercase letters?");

if (confirmLowercase) {
  lowercaseLetters;
}
// Pop up asking if the user wants any numbers
var confirmNumbers = window.confirm("Would you like numbers?");

if (confirmNumbers) {
  numbers;
}
// Pop up asking if the user wants any special characters
var confirmSpecial = window.confirm("Would you like special characters?");

if (confirmSpecial) {
  specialCharacters;
}
//Pop up if they don't choose any type of characters
if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecial){
  //start the function over again
}
//A way to pick random characters from each criteria picked
//A way to put all the criteria picked together in a random order to create the password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
