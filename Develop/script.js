// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var characterCount = prompt("How many characters in your password");
  characterCount=12;
  console.log(characterCount);
  Number(characterCount);
  
  if (Number.isNaN(Number(characterCount))===true||characterCount<8 || characterCount>128){
    alert(characterCount+' is not a valid number between: 8 - 128');
  }

  var useLower = confirm('Include lowercase?');
  console.log(useLower);

  var useUpper = confirm('Include uppercase?');
  console.log(useUpper);

  var useSpecial = confirm('Include Special Characters?');
  console.log(useSpecial);

  var useNumber = confirm('Include Numbers?');
  console.log(useNumber);

if (useLower===false && useUpper===false && useSpecial===false && useNumber===false){
  alert('Must select at least one of the options.');
}

function generatePassword(){
  'asdfasdf';
}
console.log(generatePassword);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


