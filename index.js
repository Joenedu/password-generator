//password generator
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>"

let characterArr = str.split('');

//console.log(characterArr, characterArr);

let passwordLengthInput = document.querySelector("#password-length-input");
let generatePasswordBtn = document.querySelector('#generate-password-btn');
let passwordParagraph = document.querySelector ("#password-paragraph");
let errorSpan = document.querySelector ('#error-span')

let password = "";
let passwordLength = "";
let errorMessage = "";

function generateRandomPassword(){

  if(!passwordLengthInput.value){
    errorMessage = 'Password length field cannot be empty';
    return
  }else if(Number(passwordLengthInput.value) < 6 || Number(passwordLengthInput.value > characterArr.length)){
    errorMessage = `Enter value between 6 and ${characterArr.length}`;
    return
  }
  password = ''
  passwordLength = Number(passwordLengthInput.value);
  
  for (let i = 0; i < characterArr.length; i++) {
  let randomIndex = Math.floor(Math.random() * characterArr.length);
  
  if(passwordLength === i){
    break;
  }
  
  password += characterArr[randomIndex]
  
}

return password

}

function renderPassword(){
  const start = performance.now()
  errorSpan.textContent = ''
  let randomPassword = generateRandomPassword() ?? ''
  //.log(randomPassword, errorMessage)
  if(randomPassword){
    errorMessage = ''
  }
if(!errorMessage){ passwordParagraph.style.display = 'block';
passwordParagraph.textContent = randomPassword
}else{
  errorSpan.textContent = errorMessage
}
  console.log(`Execution time: ${performance.now() - start} ms`)
}

generatePasswordBtn.addEventListener('click', renderPassword);