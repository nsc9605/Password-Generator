// Assignment Code
var generateBtn = document.querySelector("#generate");


// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var numbers = confirm("Do you want numbers in your password?");

  var special = confirm("Do you want special characters in your password?");

