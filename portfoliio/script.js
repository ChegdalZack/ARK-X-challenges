// navbar effects on scroll
window.addEventListener("scroll",function() {
const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
});





// portfolio section modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active")
}
imgCards.forEach((imgCard,i)=>{
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
 portfolioCloseBtn.addEventListener("click",()=>{
    portfolioModals.forEach((portfolioModalView)=>{
        portfolioModalView.classList.remove("active");
    });
 });
});




// our clients swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



//   scroll to top btn

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",this.window.scrollY > 500);

});

scrollTopBtn.addEventListener("click",() => {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});

// navigation menu items active on page scroll 

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50; // Adjust this value as needed
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("nav a[href*='" + id + "']").classList.add("active");
        } else {
            document.querySelector("nav a[href*='" + id + "']").classList.remove("active");
        }
    });
});



// dark mode 

const themeBtn = document.querySelector(".theme-btn");

// Event listener
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

// Functions to get current theme and icon
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

// Retrieve saved theme and icon from localStorage
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

// Apply saved theme and icon if available
if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}



// responsive nav menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        navigation.classList.remove("active");

    });
});