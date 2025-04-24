let navMenu = document.querySelector(".res__nav__menu");
let navLists = document.querySelector(".nav__lists")
 
console.log(navMenu);


navMenu.addEventListener("click", function (){
    if (navLists.className.includes("open__nav__lists")){
        navLists.classList.remove("open__nav__lists")
        navMenu.classList.remove("nav__btn")
        
    } else{
        navLists.classList.add("open__nav__lists")
        navMenu.classList.add("nav__btn")
    }
})

