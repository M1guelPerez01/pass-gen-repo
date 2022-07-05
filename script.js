var generateBtn = document.querySelector("#generate");


function writePassword() {
  let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:;|<?>~`";
  let passwordLength = 8;
  let passwordValue = " ";
  
  for (let i = 0; i < passwordLength; i++) {
    let number = math.floor(math.random() * characters.length);
    passwordValue += characters.substring(number, number = 1);
    }


  
    passwordText.value = password;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  return passwordValue;

}

generateBtn.addEventListener("click", writePassword);
