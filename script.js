
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
    if(matches === 0){
        results_box.style.display="none";
        results_box.innerHTML="";

    }
    else{
        results_box.style.display="block";
        results_box.innerHTML= html;
    }

}

  function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  let modals = document.getElementByClass('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}
