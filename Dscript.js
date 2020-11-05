
// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-./:;<=>,?[]\`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  // prompt user to choose password length
  var length = prompt("How many characters do you want in your password? Enter a number between 8 and 90");
  
  // confirm each string
  var lowercase = confirm("Do you want lowercase letters in your password?");
  
  var uppercase = confirm("Do you want uppercase letters in your password?");

  var numbers = confirm("Do you want numbers in your password?"); 

  var symbols = confirm("Do you want symbols in your password?");
  
// Generate password
function generatePassword() {
  // evaluate character type 
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if (charType.toLowerCase === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "numbers") {
    charSet = "0123456789";
  } else if (charTypeLower === "symbols") {
    charSet = "!@#$%^&*()-./:;<=>,?[]\`{|}~";
  }
// Return the value
var returnValue = "";
// Use for loop
  for (var i = 0; i < length; i++) {
  // picks character within charSet at index of random number
  returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
return returnValue;
}
alert(generatePassword());

