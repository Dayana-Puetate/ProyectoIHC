let menu = document.querySelector("#menu");
let toggleIicon = document.querySelector("#toggle-icon");

toggleIicon.addEventListener("click", function() {
  menu.classList.toggle("menu-on");
});

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".botones")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});
cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(() => {
        modalC.style.opacity="0";
    modalC.style.visibility="hidden";
    }, 500)
});
window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
    
        setTimeout(() => {
            modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        }, 500)
    }
})