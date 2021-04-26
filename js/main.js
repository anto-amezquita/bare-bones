/* ==========================================================================
   Drawer
   ========================================================================== */
/* When the user clicks on the button,
toggle between hiding and showing the drawer */
function toggleDrawer(event) {
  if(event.target.matches(".toggle-drawer-button")) {
    var drawerButtonTargetId = event.target.getAttribute("data-target-id");
    event.target.classList.toggle("toggle-drawer-button--active");
    document.getElementById(drawerButtonTargetId).classList.toggle("drawer--active");
  }
}

// Close all drawers
function closeAllDrawers() {
  //console.log("closeAllDrawers");
  var drawers = document.getElementsByClassName("drawer");
  var i;
  for (i = 0; i < drawers.length; i++) {
    var openDrawer = drawers[i];
    if (openDrawer.classList.contains("drawer--active")) {
      openDrawer.classList.remove("drawer--active");
    }
  }
}


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
  var dropdowns = document.getElementsByClassName("dropdown__button");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("dropdown--active")) {
      openDropdown.classList.remove("dropdown--active");
    }
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches(".dropdown__button")) {
    closeAllDropdowns();
  }
});

