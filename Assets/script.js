// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const number = "1234567890";
  const special = "!@#$%^&*+?";
  var passwordLenght = document.getElementById("myRange").value
  let charsForPassword = "";
  let password = "";
  var checkBox1 = document.getElementById("uppercase");
  if (checkBox1.checked){
    charsForPassword += upperCase
  }
  var checkBox2 = document.getElementById("lowercase");
  if (checkBox2.checked){
    charsForPassword += lowerCase
  }
  var checkBox3 = document.getElementById("number");
  if (checkBox3.checked){
    charsForPassword += number
  }
  var checkBox4 = document.getElementById("special");
  if (checkBox4.checked){
    charsForPassword += special
  }

  for(var i = 0; i < passwordLenght; i++){
    password = password + charsForPassword.charAt(Math.floor(Math.random() * Math.floor(charsForPassword.length)))
  }
  return (password)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
