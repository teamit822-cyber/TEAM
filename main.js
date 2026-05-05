

const btn = document.querySelector('.mode_btn');
const dark=document.getElementById('dark_mode_button');
const light=document.getElementById('light_mode_button');
const body = document.body;

if(localStorage.getItem('theme')==='dark'){
    body.classList.add('dark_mode');
    dark.style.display="none";
}
if(localStorage.getItem('theme')==='light'){
    light.style.display="none";
    light.style.display="block";
}
btn.onclick = function(){
    body.classList.toggle('dark_mode');
    
    if(body.classList.contains('dark_mode')){
        localStorage.setItem('theme','dark');
        dark.style.display="none";
        light.style.display="block";
    }
    else{
        localStorage.setItem('theme','light');
        light.style.display="none";
        dark.style.display="block";}
        
}





/* sign up*/




function signup(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("confirmpass").value;

    if (!name || !email || !phone || !pass || !confirmpass){
        alert("Please fill all inputs!");
        return;
    }
    if (pass !== confirmpass){
        alert("Confirm password does not match With password!");
        return;
    }
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("pass",pass);
    alert("Sign Up Successfully");
    window.location.href="login.html";
}











/*login page*/ 

function login(){
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
    let remember = document.getElementById("rem").checked;
    

    let storedEmail = localStorage.getItem("email");
    let storedPass = localStorage.getItem("pass");

    if (!storedEmail || !storedPass){
        alert("No user found, Go to Sign Up");
        return;
    }
    if (!email || !pass){
        alert("Please fill all inputs!");
        return ;
    }
    if (email === storedEmail && pass === storedPass){
        if(remember){
            localStorage.setItem("savedEmail",email);
            localStorage.setItem("savedPass",pass);
        }
        else{
            localStorage.removeItem("savedEmail");
            localStorage.removeItem("savedPass");
        }

        alert("Login Successful!");
        window.location.href="home.html";
    }
    else{
        alert("Wrong Email or Password!");
    }
}
    

window.onload = function(){
    let savedEmail = localStorage.getItem("savedEmail");
    let savedPass = localStorage.getItem("savedPass");
    if (savedEmail && savedPass){
        document.getElementById("loginEmail").value = savedEmail;
        document.getElementById("loginPass").value = savedPass;
        document.getElementById("rem").checked = true;
    }
}




/* contact us page*/




document.getElementById("contactform").onsubmit = function(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === ""){
        alert("PLease fill all fields!");
       return false;
    }
    else{
    alert("Message sent Successfully");
    return false;
    }
}





