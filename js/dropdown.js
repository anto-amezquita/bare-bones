/* ==========================================================================
   Dropdown
   ========================================================================== */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown(event) {
    if(event.target.matches(".dropdown__button")) {
      event.target.classList.toggle("dropdown--active");
    }
}

// Close all dropdowns
function closeAllDropdowns() {
  //console.log("closeAllDropdowns");
  const dropdowns = document.getElementsByClassName("dropdown__button");
  let i;
  for (i = 0; i < dropdowns.length; i += 1) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("dropdown--active")) {
      openDropdown.classList.remove("dropdown--active");
    }
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown__button")) {
    closeAllDropdowns();
  }
});

