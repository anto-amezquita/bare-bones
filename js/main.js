/* Dropdown START... */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown(event) {
    if(event.target.matches('.dropdown__button')) {
      event.target.classList.toggle("dropdown--active");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown__button')) {
      var dropdowns = document.getElementsByClassName("dropdown__button");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown--active')) {
          openDropdown.classList.remove('dropdown--active');
        }
      }
    }
  }

/* ...Dropdown END */
