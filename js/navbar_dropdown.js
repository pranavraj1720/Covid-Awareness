

function openDropdown(event,dropdownID){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: 'top-end'
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");

}


// navbar animation
const navbar_btn_element = document.querySelector(".click");
const navbar_nav_element = document.querySelector(".animation");

navbar_btn_element.addEventListener("click", function(){
  navbar_nav_element.classList.add("fadeIn");
})

