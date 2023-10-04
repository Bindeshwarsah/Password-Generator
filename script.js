let slider=document.getElementById("valSlider");
let displaySlider=document.getElementById("valSliderOutput");
let passwordBox=document.getElementById("passField");
let passwordGenBtn=document.getElementById("passbtn");
let lowerCase=document.getElementById("lowerCase");
let upperCase=document.getElementById("upperCase");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");
let copyIcon=document.getElementById("copyIcon");


displaySlider.textContent=slider.value;   
slider.addEventListener('input',()=>{
    displaySlider.textContent=slider.value;   
});


let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="!@#$%^&*";

passwordGenBtn.addEventListener('click',()=>{
    passwordBox.value=generatePassword()
});

function generatePassword(){
    let password="";
    let allChars="";
    allChars+=lowerCase.checked ? lowerChars : "";
    allChars+=upperCase.checked ? upperChars : "";
    allChars+=number.checked ? numbers : "";
    allChars+=symbol.checked ? symbols : "";

    if(allChars==""||allChars.length==0){
        return password;
    }

    let i=1;
    while(i<=slider.value){
    password += allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return password;

}
copyIcon.addEventListener('click',()=>{
    if(passwordBox.value!=""||passwordBox.value.length>=1){
        navigator.clipboard.writeText(passwordBox.value);
        copyIcon.innerText="check";
        copyIcon.style.color="green";
        copyIcon.title="Password Copied"
        setTimeout(()=>{
            copyIcon.innerText="content_copy";
            copyIcon.style.color="black";
            copyIcon.title="";
        },2000);
    }
});