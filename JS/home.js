
// Footer visitor count//
const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
    let visits;

    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 0;
        // should be +1

        localStorage.setItem("visits", incrementedCount);
    }

    count.innerText = localStorage.getItem("visits");
}



// Navbar scroll JS// 

window.addEventListener('DOMContentLoaded', function() {
    const navEL = document.querySelector('.navbar');
  
    function handleScroll() {
      if (window.scrollY >= 200) {
        navEL.classList.add('navbar-scrolledDesktop');
      } else {
        navEL.classList.remove('navbar-scrolledDesktop');
      }
    }
  
    function handleMediaQueryChange() {
      if (window.matchMedia('screen and (max-width: 575px)').matches) {
        navEL.classList.add('navbar-scrolledMobile');
      } else {
        navEL.classList.remove('navbar-scrolledMobile');
      }
  
      if (window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)').matches) {
        navEL.classList.add('navbar-scrolledTablet');
      } else {
        navEL.classList.remove('navbar-scrolledTablet');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleMediaQueryChange);
  
    handleMediaQueryChange(); // Call the function initially to apply the correct classes based on the initial viewport size
  });
  


// End of Navbar scroll JS// 



// const navEL = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {

//     if (window.scrollY >= 200) {
//         navEL.classList.add('navbar-scrolled');
//     }

//     else if 
//     (window.scrollY < 200) {
//         navEL.classList.remove('navbar-scrolled');
//     }
// } )
// ;

