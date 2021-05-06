const hamburgerEl = document.querySelector(".hamburger-menu");
const mobilemenuEl = document.querySelector(".menu__mobile-none");
const bodyEl = document.querySelector("body");

//functions
const hamburgerClickHandler = () => {
    console.log("hi")
    
    hamburgerEl.classList.contains("click") ? 
        hamburgerEl.classList.remove("click") : hamburgerEl.classList.add("click")
    if(mobilemenuEl.classList.contains("menu__mobile")) { 
        mobilemenuEl.classList.remove("menu__mobile")
        bodyEl.classList.remove("hidden-overflow")
     } 
     else{
        mobilemenuEl.classList.add("menu__mobile");
        bodyEl.classList.add("hidden-overflow")
     } 

}

//EventListeners
hamburgerEl.addEventListener("click",hamburgerClickHandler);