// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdCharacter={
pwdAlphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

pwdNumbers:["0","1","2","3","4","5","6","7","8","9"],

pwdSpecialCHR:["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"]
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){

  var currentLength =0;
  var characterCount = prompt("How many characters in your password");
  var completePWD = "";
  console.log(characterCount);
  Number(characterCount);

  if (Number.isNaN(Number(characterCount))===true||characterCount < 8 || characterCount>128){
  alert(characterCount+' is not a valid number between: 8 - 128');
  }else{

    var useLower =confirm('Include lowercase?');
    console.log(useLower);

    var useUpper = confirm('Include uppercase?');
    console.log(useUpper);

    var useSpecial = confirm('Include Special Characters?');
    console.log(useSpecial);

    var useNumber = confirm('Include Numbers?');
    console.log(useNumber);
  }
  if (useLower===false && useUpper===false && useSpecial===false && useNumber===false){
  alert('Must select at least one of the options.');
}else {
    while (currentLength < characterCount){
      if (useLower===true){
          var lc = pwdCharacter.pwdAlphabet[Math.floor(Math.random()*26)]
        completePWD = completePWD + lc;
        currentLength++;
       }
       if (useUpper===true){
        var up = pwdCharacter.pwdAlphabet[Math.floor(Math.random()*26)]
        completePWD = completePWD + up.toLocaleUpperCase();
        currentLength++;
       }
       if (useNumber===true){
        var nm = pwdCharacter.pwdNumbers[Math.floor(Math.random()*10)]
        completePWD = completePWD+nm;
        currentLength++;
       }
       if (useSpecial===true){
        var sc = pwdCharacter.pwdSpecialCHR[Math.floor(Math.random()*32)]
        completePWD = completePWD+sc;
        currentLength++;
       }
}
}
return completePWD;
}
