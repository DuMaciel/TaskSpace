const form = document.getElementById('registerForm');
const password = document.getElementById('password');
const confPassword = document.getElementById('confPassword');

confPassword.addEventListener('keyup', ()=>{
    if(password.value != confPassword.value){
        confPassword.classList.add('dif');
    }else{
        confPassword.classList.remove('dif');
    }
})

form.addEventListener('submit', (event)=>{
    if(password.value != confPassword.value){
        event.preventDefault();
    } 
})