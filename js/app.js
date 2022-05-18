/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sectionMenu = document.querySelectorAll("section");
const navMenu = document.querySelector("#navbar__list");




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNav() {
    sectionMenu.forEach((section) => {
      itemList +=   `<li  class='${section.className}'  data-link=${section.id} >
      <a class='menu__link'  href="#${section.id}">  ${section.dataset.nav} </a> </li>`});
    
  
    navMenu.innerHTML = itemList;
  }
  
  let itemList = "";
  createNav();

// Add class 'active' to section when near top of viewport
 document.addEventListener("scroll", function() {
   sectionMenu.forEach(function (active) {
      let sectionOff = active.getBoundingClientRect();
      if (sectionOff.top >= -350 && sectionOff.top <= 150){
         active.classList.add("your-active-class");
      
      } else{
         active.classList.remove("your-active-class");
         
      }    
   })
})
// navigation in active state

let navLink = document.querySelector('#nav_active').querySelectorAll('li');




navLink.forEach((link) => {

  link.addEventListener('click', function (evt) {
   navLink.forEach((link) => {
    link.classList.remove('active-nav');

   });
   
    link.classList.add('active-nav');
    
  });
  

});



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


