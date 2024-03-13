//___________________ENCABEZADO____________
let navHamb =document.querySelector(".hamburguesa");
let navMenu = document.querySelector(".menu-navegacion");
navHamb.addEventListener("click",()=>{
    navMenu.classList.toggle("menu-navegacion_mostrar")
    if (navMenu.classList.contains("menu-navegacion_mostrar")) {
        navHamb.setAttribute("aria-label","cerrar menu");
    }else{
        navHamb.setAttribute("aria-label","abrir menu");
    }
})