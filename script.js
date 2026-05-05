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
        
}
const search_recipes_engine =["Margherita Pizza","Mexican Chicken Pasta","Chicken Crispy Crepe","Koshary","salmon","Butter Chicken","Noddles","Beef Burger","Sushi","Shawarma","Crispy Fried Chicken","sausage feteer","Samosa","Hawawshi meat","Creamy White Sauce Pasta","Roasted Chicken"];

const search_box = document.getElementById('search_box');
const results_box = document.getElementById('result_of_search');

search_box.onkeyup = function(){
    const typed = search_box.value.toUpperCase();

    if(typed === ""){
        results_box.style.display="none";
        results_box.innerHTML= "";
        return;
    }

    const matches=[];

    for (let i=0; i<search_recipes_engine.length; i++){
        if(search_recipes_engine[i].includes(typed))
        {
            matches.push(search_recipes_engine[i]);
        }
    }

    let html ="";
    for(let i=0;i<matches.length;i++){
        const recipe_id =matches[i].toLowerCase().replace(/ /g,"_");
        html= html + "<div onclick='go_to_recipe(\""+recipe_id+"\")'>" + matches[i] + "</div>";
    }

    

    if(matches === 0){
        results_box.style.display="none";
        results_box.innerHTML="";

    }
    else{
        results_box.style.display="block";
        results_box.innerHTML= html;
    }
}