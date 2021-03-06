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

function generatePassword() {
  //Arrays
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacter = "!$%&'?()*+,-./:;<=>?@[]^_`{|}";
 
  //Declare password result variable for below conditions:
  var passwordResult = "";

  //Prompt and Confirm parameters
  var confirmLength = prompt(
    "What length of passowrd do you need? Please select any length between 8 and 128."
  );
   
  while (isNaN(confirmLength)) {
    alert("Please enter valid number between 8 and 128");
    confirmLength = prompt(
      "What length of passowrd do you need? Please select any length between 8 and 128."
    );
  }

  while (confirmLength <= 7 || confirmLength > 128) {
    alert(
      "Password Length must be between 8-128 characters. Please enter the length again"
    );
    confirmLength = prompt(
      "What length of passowrd do you need? Please select any length between 8 and 128."
    );
  }

  var confirmLowerCase = confirm("Do you want lowercase in your password?");
  var confirmUpperCase = confirm("Do you want uppercase in your password?");
  var confirmNumbers = confirm("Do you want numbers in your password?");
  var confirmSpecialChar = confirm(
    "Do you want special characters in your password?"
  );

  // If no confirm is made by user, ask again to confirm. while loop if all confirms are false

  while (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialChar === false
  ) {
    alert("Please choose at least one parameter");
    var confirmLowerCase = confirm("Do you want lowercase in your password?");
    var confirmUpperCase = confirm("Do you want uppercase in your password?");
    var confirmNumbers = confirm("Do you want numbers in your password?");
    var confirmSpecialChar = confirm(
      "Do you want special characters in your password?"
    );
  }


  //Sets of conditions

  if (confirmLowerCase === true) {
    passwordResult = passwordResult.concat(lowerCase);
  }

  if (confirmUpperCase === true) {
    passwordResult = passwordResult.concat(upperCase);
  }

  if (confirmNumbers === true) {
    passwordResult = passwordResult.concat(numbers);
  }

  if (confirmSpecialChar === true) {
    passwordResult = passwordResult.concat(specialCharacter);
  }
    
//Declare variable for password:
  var finalPassword = "";

  //for loop
  for (i = 0; confirmLength > i; i++) {
    finalPassword += passwordResult.charAt(Math.floor(Math.random() * passwordResult.length));
  }
  return(finalPassword);
  }



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
