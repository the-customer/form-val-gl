// Elements a manipuler
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//===============Fonctions
function checkRequired(inputs){ //inputs est un tableau
    //recuperer le parent de l'element:
    inputs.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required!!!`);
        }else{
            showSuccess(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must have at least ${min} caracters!`)
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must have less than ${max} caracters!`)
    }else{

    }
}
//
function passwordsMatch(input1,input2){
    if(input1.value.trim() !== input2.value.trim()){
        showError(input2,"Passwords don't match!");
    }
}
//
function showError(input,message){
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    parent.className = 'form-group error';
    small.innerText = message;
}
//
function showSuccess(input){
    const parent = input.parentElement;
    parent.className = 'form-group success';
}
//
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//===============Events
form.addEventListener('submit',function(e){
    e.preventDefault(); //bloquer la soumission du formulaire
    //
    //Valider les donnees du formulaire
    //1.Champs requis
    checkRequired([username,email,password,password2]);
    //2.longueur des Champs
    checkLength(username,3,15);
    checkLength(password,6,25);
    //3.Verifier si les mots de passe sont les memes
    passwordsMatch(password,password2);
})