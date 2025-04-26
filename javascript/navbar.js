let navMenu = document.querySelector(".res__nav__menu");
let navLists = document.querySelector(".nav__lists")
let navLink = document.querySelectorAll(".nav__link") 

navMenu.addEventListener("click", function (){
    if (navLists.className.includes("open__nav__lists")){
        navLists.classList.remove("open__nav__lists")
        navMenu.classList.remove("nav__btn")
        
    } else{
        navLists.classList.add("open__nav__lists")
        navMenu.classList.add("nav__btn")
    }
})


navLink.forEach(el => {
    el.addEventListener("click", function (){
        navLists.classList.remove("open__nav__lists")
        navMenu.classList.remove("nav__btn")
    })
});




