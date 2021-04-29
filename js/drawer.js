/* ==========================================================================
   Drawer
   ========================================================================== */

/* Close all drawers - START */
function closeAllDrawers() {
  //console.log("closeAllDrawers!");

    const drawers = document.getElementsByClassName("drawer");
    let i;
    for (i = 0; i < drawers.length; i += 1) {
      const drawer = drawers[i];
      if (drawer.classList.contains("drawer--active")) {
        drawer.classList.remove("drawer--active");
      }
    }

    //Deactivate .toggle-drawer-button elements.
    const toggleDrawerButtons = document.getElementsByClassName("toggle-drawer-button");

    let toggleDrawerButtonsI;
    for (toggleDrawerButtonsI = 0; toggleDrawerButtonsI < toggleDrawerButtons.length; toggleDrawerButtonsI += 1) {
      const toggleDrawerButton = toggleDrawerButtons[toggleDrawerButtonsI];
      if (toggleDrawerButton.classList.contains("active")) {
        toggleDrawerButton.classList.remove("active");
      }
    }

}
/* Close all drawers - END */

/* Toggle a Drawer - START */
function toggleDrawer(event) {
  //console.log("toggleDrawer!");

  if(event.target.matches(".toggle-drawer-button")) {

    const drawerButtonTargetId = event.target.getAttribute("data-target-id");

    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      document.getElementById(drawerButtonTargetId).classList.remove("drawer--active");
    }
    else {
      closeAllDrawers();
      event.target.classList.add("active");
      document.getElementById(drawerButtonTargetId).classList.add("drawer--active");
    }
  }
}
/* Toggle a Drawer - END */

/* Close a drawer if the user clicks outside of it - START */
window.addEventListener("click", function(event) {
  const targetFromDrawer = event.target.closest(".drawer");

  if (!event.target.matches(".toggle-drawer-button") && !targetFromDrawer) {
    closeAllDrawers();
  }
});
/* Close a drawer if the user clicks outside of it - END */
