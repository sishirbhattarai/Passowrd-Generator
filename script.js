// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays



var confirmLength = ""

8

//Prompt and Confirm

var confirmLength = prompt("What length of passowrd do you need? Please select any length between 8 and 128.")

while (confirmLength <=7 || confirmLenth > 128) {
  alert("Password Length must be between 8-128 characters. Please enter the length again")
  var confirmLength = prompt("What length of passowrd do you need? Please select any length between 8 and 128.")
}

var confirmLowerCase = confirm("Do you want lowercase in your password?")

var confirmUpperCase = confirm("Do you want lowercase in your password?")

var numbers = confirm("Do you want numbers in your password?")

var specialChar = confirm("Do you want special characters in your password?")




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
