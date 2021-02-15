/*
const title = document.getElementById("title");
 const BASE_COLOR = "rgb(52, 73, 94)";
 const OTHER_COLOR = "#74b9ff";


 function handleClick() {
     const currentColor = title.style.color;
     if (currentColor === BASE_COLOR){
         title.style.color = OTHER_COLOR;
     }else{
         title.style.color = BASE_COLOR;
     }
 }

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
*/

const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    title.classList.toggle(CLICKED_CLASS);  
    
    
}

function init() {
    title.addEventListener("click", handleClick);
}
init();