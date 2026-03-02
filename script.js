const inputs= document.querySelectorAll("input");
const passwd= document.querySelector("#passwd");
const f= document.querySelector("form");
const confmPasswd= document.querySelector("#confmPasswd");
const emailInput= document.querySelector("#email");


f.addEventListener("submit", (e) =>{
    if(passwd.validity.valueMissing){
        passwd.setCustomValidity("Where you going?");
    }
    else{
        passwd.setCustomValidity("");
    }

    if(confmPasswd.validity.valueMissing){
        confmPasswd.setCustomValidity("Where you going?");
    }
    else{
        confmPasswd.setCustomValidity("");
    }

    if(!f.checkValidity()){
        e.preventDefault();
        f.reportValidity();
        return;
    }

    e.preventDefault();
});

emailInput.addEventListener("input", (e) =>{
    if(emailInput.validity.typeMismatch){
        emailInput.style.borderColor= "red";
    }
    else{
        emailInput.style.borderColor="green";
    }

});

emailInput.addEventListener("change", (e) =>{
    

    if(!emailInput.checkValidity()){
        e.preventDefault();
        emailInput.reportValidity();
        return;
    }

});