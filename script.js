// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create an array for the characters options to choose from for password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = lowerCasedCharacters.map(x => x.toUpperCase());
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// FIRST STEP: create a function for the var generatePassword
function generatePassword (){
  // Prompt user to select how many characters want in generated password
  var passLength = parseInt(prompt('How many characters would you like your password to be?'));
  
  // Alert the user to enter a number answer only and instruct to choose between 8 and 128 characters
  if(isNaN(passLength) === true){
    alert('Password length must be a number only!');
    return;
  }
  if(passLength < 8 || passLength > 128){
    alert('Password length has to be greater than 8 and less than 128 characters!');
    return
  }

  var hasNumbers = confirm('Select ok to include numbers');
  var hasUpperCase = confirm('Select ok to include uppercase letters');
  var hasLowerCase = confirm('Select ok to include lowercase letters');
  var hasSpecialCharacters = confirm('Select ok to include special characters');  
  // Must alert user to select at least one type of character when prompted
  if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters){
    alert('Must select at least one password character type!');
    return;
  }

  // Create variable to hold new generated password and have it loop for each character type
  var password = '';
  for( i=0; i < passLength; i++){

    if(hasLowerCase && password.length < passLength) {
        password += getRandom(lowerCasedCharacters);
    }

    if(hasUpperCase && password.length < passLength) {
        password += getRandom(upperCasedCharacters);
    }

    if(hasNumbers && password.length < passLength) {
        password += getRandom(numericCharacters);
    }

    if(hasSpecialCharacters && password.length < passLength) {
      password += getRandom(specialCharacters);
    }

  }
  
  return password;
}

// Create a function for password to be random each time for
function getRandom(arr){
  var index = Math.floor(Math.random() * arr.length);
  var val = arr[index];
  return val;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
