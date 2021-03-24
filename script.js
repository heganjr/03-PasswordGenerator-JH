// -  User clicks 'Generate Password' - Function to
// - Provides a prompt on the length of password (8 - 128 characters), when length is entered -
// - confirm window is shown "Lowercase to be used Yes or No" https://www.w3schools.com/jsref/met_win_confirm.asp
// - confirm window is shown "Uppercase to be used Yes or No" https://www.w3schools.com/jsref/met_win_confirm.asp
// - confirm window is shown "Special Characters to be used Yes or No" https://www.w3schools.com/jsref/met_win_confirm.asp
// - confirm window is shown "Numbers to be used Yes or No" https://www.w3schools.com/jsref/met_win_confirm.asp
// - Based on criteria selected, password is generated
//  - Password is shown in text box - element.textContent/ .innerText

// https://www.studytonight.com/post/building-a-password-generator-with-javascript

// BONUS: Copy button
//  - Checkbox criteria
//  - Character length slider


// Variables
// Creating a low to high function to create the decimals for the characters in an ASCII table

const lowerCaseCharacters = arrayFromLowToHigh(97, 122);
const upperCaseCharacters = arrayFromLowToHigh(65,90);
const numericCharacters = arrayFromLowToHigh(48, 57);
const specialCharacters = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
console.log(
  lowerCaseCharacters,
  upperCaseCharacters,
  numericCharacters,
  specialCharacters
  
);

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordCharacters = [];
  let passwordLength = parseInt(number.value)

  // Come back to this later when working on prompt for character length
  // I DONT THINK I NEED THIS ^^^

  if (window.prompt("Select number of characters from 8 - 128"))

  
  if (window.confirm("Would you like to select lower case characters? 🤔")){
    passwordCharacters = passwordCharacters.concat(lowerCaseCharacters)
    console.log(passwordCharacters)
  }
  
  if (window.confirm("Would you like to select upper case characters? 🤔")){
    passwordCharacters = passwordCharacters.concat(upperCaseCharacters)
    console.log(passwordCharacters)
  }

  if (window.confirm("Would you like to select numeric characters? 🤔")){
    passwordCharacters = passwordCharacters.concat(numericCharacters)
    console.log(passwordCharacters)
  }

  if (window.confirm("Would you like to select special characters? 🤔")){
    passwordCharacters = passwordCharacters.concat(specialCharacters)
    console.log(passwordCharacters)
  }
  let passwordResult = ""
  for (let i =0; i < passwordLength; i++){
    let characterRandomiser = passwordCharacters[Math.random() * passwordCharacters./*passwordLength*/)];
    characterRandomiser = String.fromCharCode(characterRandomiser)
    passwordResult += characterRandomiser
    console.log(passwordResult)
  }
  return passwordResult

  // SORT OUT PASSWORD LENGTH PROMPT
 

}


function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);