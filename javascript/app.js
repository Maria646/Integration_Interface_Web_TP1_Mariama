const lastName = document.getElementById("nom");
const surname = document.getElementById("prenom")
const email = document.getElementById("email");
const message= document.getElementById("message");
const input = document.querySelector(".btn__formulaireMaps");
let verification = 0;

const conditions = () => {
const lastNameValue = lastName.value.trim();
const surnameValue = surname.value.trim();
const emailValue = email.value.trim();
const messageValue = message.value.trim();
verification = 0;
let noError = true;

    if(lastNameValue === '') {
        setError(lastName, 'Le nom ne peut pas être vide');
        noError = false;
    } else {
        setSucces(lastName);
    }
    
    if(surnameValue === ''){
        setError(surname,'Email ne peut être vide');
        noError = false;
    }
    else{
        setSucces(surname);
    }
    
    if(emailValue === ''){
        setError(email,'Email ne peut être vide');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Entrez une adresse courriel valide');
        noError = false;
    }
    else{
        setSucces(email);
    }
    
    if(messageValue === ''){
        setSucces(message);
        noError = true;
    }else{
        setSucces(message);
        noError = true;
    }
    
    console.log(noError);
    return noError;
}

const validateEmail = (email) => {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return re.test(String(email).toLowerCase());
}


const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const fusionInputParent = inputControl.querySelector(".messageError");

    fusionInputParent.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSucces = (element) =>{
    verification++;
    const inputControl = element.parentElement; 
    const fusionInputParent = inputControl.querySelector(".messageError");

    fusionInputParent.innerText = "";
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
    if(verification === 4){
        redirection();
    }
}

input.addEventListener("click", function(event) {
    event.preventDefault();
    conditions();
  })
  
  function redirection(){
    window.location.replace("./confirmation.html");
  }


const flecheSousMenuOne = document.querySelector(".flecheSousMenuOne_header");
const flecheSousMenuTwo = document.querySelector(".flecheSousMenuTwo_header");
const sousMenuOne = document.querySelector(".sousMenuListOne__header");
const sousMenuTwo = document.querySelector(".sousMenuListTwo__header");

if(flecheSousMenuOne){
    flecheSousMenuOne.addEventListener("click", function(event) {
        const result = sousMenuOne.classList.toggle("open");
        return result;
    });
}


sousMenuOne.addEventListener("mouseleave", function(event) {
    const relatedTarget = event.relatedTarget;
    if (!relatedTarget || !sousMenuOne.contains(relatedTarget)) {
      sousMenuOne.classList.remove("open");
    }
  });


if(flecheSousMenuTwo){
    flecheSousMenuTwo.addEventListener("click", function(event) {
        const result = sousMenuTwo.classList.toggle("open");
        return result;
    });
}


sousMenuTwo.addEventListener("mouseleave", function(event) {
    const relatedTarget = event.relatedTarget;
    if (!relatedTarget || !sousMenuTwo.contains(relatedTarget)) {
      sousMenuTwo.classList.remove("open");
    }
  });



