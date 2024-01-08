const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu-items");
  
let menuOpen = false

menuIcon.addEventListener("click",() => {
        if (menuOpen) {
                menuItems.classList.remove("hide");
                menuOpen = false;
         }
          else {
                menuItems.classList.add("hide");
                menuOpen = true;

         }
      
});