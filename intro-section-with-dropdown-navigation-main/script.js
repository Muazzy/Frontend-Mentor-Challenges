var openMenuBtn = document.querySelector(".toggle-btn");
var navMenu = document.querySelector(".nav-items");
var closeMenuBtn = document.querySelector(".close-btn");
var body = document.querySelector("body");

// eventListners for open and close nav buttons


openMenuBtn.addEventListener("click", function () {
    //removing closing animation
    navMenu.classList.remove("nav-close-animation");

    navMenu.classList.remove("d-none");
    openMenuBtn.classList.add("d-none");
    body.classList.add("shadow");
});


closeMenuBtn.addEventListener("click", function () {
    openMenuBtn.classList.remove("d-none");
    // for adding animation to the sidebar
    //not the best practice but it works nevertheless
    navMenu.classList.add("nav-close-animation");
    setTimeout(function () {
        navMenu.classList.add("d-none");
    }, 200);

    body.classList.remove("shadow");

    //to also close off the inner dropdowns
    featuresList.classList.add("d-none");
    companyList.classList.add("d-none");
    //also set the arrows to default, hehe
    featureArrow.classList.remove("rotateimg180");
    companyArrow.classList.remove("rotateimg180");
});



//inside nav dropdowns
var featuresDd = document.querySelector(".features-ul");
var companyDd = document.querySelector(".company-ul");

//dropdowns lists
var featuresList = document.querySelector(".features-li");
var companyList = document.querySelector(".company-li");

//arrow-icons
var featureArrow = document.querySelector(".features-ul .arrow-icon");
var companyArrow = document.querySelector(".company-ul .arrow-icon");

featuresDd.addEventListener("click", function () {
    featuresList.classList.toggle("d-none");
    featureArrow.classList.toggle("rotateimg180");
});


companyDd.addEventListener("click", function () {
    companyList.classList.toggle("d-none");
    companyArrow.classList.toggle("rotateimg180");
});