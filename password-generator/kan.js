const button = document.querySelector('button')
const copy = document.getElementById('copy')
const input = document.getElementById('text')
const alertContainer = document.querySelector('.alertContainer')

button.addEventListener('click', function(e){
    passwordGenerator();
})

copy.addEventListener('click', function(e){
    passwordCopy();
    passwordAlert();
})

input.addEventListener('click', function(e){
    console.log(e.target)
})


function passwordGenerator(){
    const passwordLength = 14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';
    for(let index = 0; index<passwordLength; index++ ){
        const randomNumber =Math.floor(Math.random()*characters.length)
        password += characters[randomNumber]
    }
    input.value = password;

}

function passwordCopy(){
  input.select();
  navigator.clipboard.writeText(input.value);
}

function passwordAlert(e){
    alertContainer.classList.remove('active')
    setTimeout(() => {
        alertContainer.classList.add('active')
    }, 2000);

}