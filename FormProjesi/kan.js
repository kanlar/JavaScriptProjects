const form = document.getElementById('form');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.getElementById('alertTitle');

let isValid = false;
let passwordMatch = false;


function validateForm(){
    isValid = form.checkValidity();
    console.log(isValid);
    if(!isValid){
        alertTitle.textContent= 'Lütfen Tüm Alanları Doldurunuz!';
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        return;
    }
    if(password.value === rePassword.value){
        passwordMatch = true;
        password.style.borderColor = 'greenyellow';
        rePassword.style.borderColor = 'greenyellow';
    }else{
        passwordMatch = false;
        password.style.borderColor = 'red';
        rePassword.style.borderColor = 'red';
        alertTitle.textContent = 'Şifreleriniz Eşleşmiyor'
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        return;
    }

    if(isValid && passwordMatch){
        alertTitle.textContent = 'Kayıt Olundu'
        alertTitle.style.color = 'green';
        alertMessage.style.borderColor = 'green';
    }
}


function  takeFormInformation(){
    const user = {
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        adress:form.adress.value
    }
    console.log(user);
}//backende çekmek için yapılır


function submitForm(e){
    e.preventDefault();
    validateForm();

    if(isValid && passwordMatch){
        takeFormInformation();
    }
}

form.addEventListener('submit', submitForm);