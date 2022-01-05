const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == ''){
        setErrorFor(username, 'Username cannot be blank')
    }else{
        setSuccesFor(username);
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccesFor(email);
    }

    if(passwordValue == ''){
        setErrorFor(password, 'Password cannot be blank')
    }else{
        setSuccesFor(password);
    }

    if(password2Value == ''){
        setErrorFor(password2, 'Password cannot be blank')
    }else if(password !== password2){
        setErrorFor(password2, 'Password does not match')
    }else{
        setSuccesFor(password2);
    }
}

function setErrorFor(input, massage){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = massage;

    formControl.className = 'form-control error';
}

function setSuccesFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control succes'
}

function isEmail(email){
    return /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/.test(email);
}