

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
