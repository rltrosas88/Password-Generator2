// Arrays of criteria
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', ':', '"', '{', '}', '|', '+', '.', '/', ';', ',', '[', ']'];

//Used functions to display the password to the user
function generatePassword (){
  var passwordLength = parseInt(prompt("How many characters would you like? Pick between 8 and 128."));

  if (!passwordLength) {
    alert("You must type a number")
  }
  else if (passwordLength <8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128.");
    return generatePassword();
  }
  else {
    confirmNumbers = confirm("Would you like to include numbers?");
    confirmSpecialCharacters = confirm("Would you like to include special characters?");
    confirmUppercase = confirm("Would you like to include uppercase letters?");
    confirmLowercase = confirm("Would you like to include lowercase letters?");
  }

  // If statement for 4 negative responses
  if (!confirmNumbers && !confirmSpecialCharacters && !confirmUppercase && !confirmLowercase) {
    userChoice = alert("You must choose at lease one type of character you would like to use.")
  }

  // Else if statements for 4 positive responses
  else if (confirmNumbers && confirmSpecialCharacters && confirmUppercase && confirmLowercase) {
    userChoice = numbers.concat(specialCharacters, uppercaseLetters, lowercaseLetters);
  }

  //Else if statements for 3 positive selections
  else if (confirmNumbers && confirmSpecialCharacters && confirmUppercase) {
    userChoice = numbers.concat(specialCharacters, uppercaseLetters);
  }
  else if (confirmNumbers && confirmSpecialCharacters && confirmLowercase) {
    userChoice = numbers.concat(specialCharacters, lowercaseLetters);
  }
  else if (confirmNumbers && confirmUppercase && confirmLowercase) {
    userChoice = numbers.concat(uppercaseLetters, lowercaseLetters);
  }
  else if (confirmSpecialCharacters && confirmUppercase && confirmLowercase) {
    userChoice = specialCharacters.concat(uppercaseLetters, lowercaseLetters);
  }

  //Else if statements for 2 positive selections
  else if (confirmNumbers && confirmSpecialCharacters) {
    userChoice = numbers.concat(specialCharacters);
  }
  else if (confirmNumbers && confirmUppercase) {
    userChoice = numbers.concat(uppercaseLetters);
  }
  else if (confirmNumbers && confirmLowercase) {
    userChoice = numbers.concat(lowercaseLetters);
  }
  else if (confirmSpecialCharacters && confirmUppercase) {
    userChoice = specialCharacters.concat(uppercaseLetters);
  }
  else if (confirmSpecialCharacters && confirmLowercase) {
    userChoice = specialCharacters.concat(lowercaseLetters);
  }
  else if (confirmUppercase && confirmLowercase) {
    userChoice = uppercaseLetters.concat(lowercaseLetters);
  }

  //Else if statements for 1 positive selection
  else if (confirmNumbers) {
    userChoice = numbers;
  }
  else if (confirmSpecialCharacters) {
    userChoice = specialCharacters;
  }
  else if (confirmUppercase) {
    userChoice = uppercaseLetters;
  }
  else if (confirmLowercase) {
    userChoice = lowercaseLetters;
  }

  //A variable to store final password
    var finalPassword = [""];
    //randomly select characters based on userChoice
    for (i = 0; i < passwordLength; i++) {
      var randomPassword = userChoice[Math.floor(Math.random() * userChoice.length)];
      finalPassword.push(randomPassword);
    }
    var password = finalPassword.join('');

    userInput(password);
    return password;
};

function userInput(password) {
  document.getElementById("password").textContent = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  password = generatePassword();
  document.getElementById("password").placeholder = password;
});
