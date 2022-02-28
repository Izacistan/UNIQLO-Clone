// MOBILE MENU: Open/Close the Mobile Menu by clicking/tapping the 'burger' icon in the upper-righthand corner.
let body = document.getElementById("container");
let toggle = document.getElementById("burger-icon");
let menu = document.getElementById("burger-menu");

// Dropdown Toggles by Item
let dropdownToggleWomen = document.getElementById("dropdown-toggle-women");
let dropdownToggleMen = document.getElementById("dropdown-toggle-men");
let dropdownToggleKids = document.getElementById("dropdown-toggle-kids");
let dropdownToggleBaby = document.getElementById("dropdown-toggle-baby");
let subMenuWomen = document.getElementById("collapse1");
let subMenuMen = document.getElementById("collapse2");
let subMenuKids = document.getElementById("collapse3");
let subMenuBaby = document.getElementById("collapse4");

//Toggle MOBILE MENU on/off.
toggle.onclick = function() {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

// Sub-Menu: Currently written out in four seperate functions. Condensing to one function at later date.
// Each one of these functions opens a sub-menu for its respective category when clicked. It will also close out of all other categories when clicked.
//I want to find a way to combine them all into one function, which I believe will require changing some IDs and/or Classes in index.html.
dropdownToggleWomen.onclick = function() {
  subMenuWomen.classList.toggle("sub-menu-active");

  if (subMenuWomen.classList.contains("sub-menu-active")) {
    subMenuMen.classList.remove("sub-menu-active");
    subMenuKids.classList.remove("sub-menu-active");
    subMenuBaby.classList.remove("sub-menu-active");
  }

}
dropdownToggleMen.onclick = function() {
  subMenuMen.classList.toggle("sub-menu-active");

  if (subMenuMen.classList.contains("sub-menu-active")) {
    subMenuWomen.classList.remove("sub-menu-active");
    subMenuKids.classList.remove("sub-menu-active");
    subMenuBaby.classList.remove("sub-menu-active");
  }
}
dropdownToggleKids.onclick = function() {
  subMenuKids.classList.toggle("sub-menu-active");

  if (subMenuKids.classList.contains("sub-menu-active")) {
    subMenuWomen.classList.remove("sub-menu-active");
    subMenuMen.classList.remove("sub-menu-active");
    subMenuBaby.classList.remove("sub-menu-active");
  }
}
dropdownToggleBaby.onclick = function() {
  subMenuBaby.classList.toggle("sub-menu-active");

  if (subMenuBaby.classList.contains("sub-menu-active")) {
    subMenuWomen.classList.remove("sub-menu-active");
    subMenuMen.classList.remove("sub-menu-active");
    subMenuKids.classList.remove("sub-menu-active");
  }
}

//SCROLL BACK TO TOP FUNCTION
// When the user clicks on the Uniqlo Logo (id="header-img"), scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
