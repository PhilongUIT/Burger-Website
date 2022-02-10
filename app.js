const searchBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".header .search-form");
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
});
document.addEventListener("click", function(e){
    if (!searchForm.contains(e.target)&&(!e.target.matches("#search-btn"))){
        searchBtn.classList.remove("fa-times");
        searchBtn.classList.add("fa-search");
        searchForm.classList.remove("active");
    }
});

const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".header .navbar");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});
document.addEventListener("click", function(e){
    if (!navBar.contains(e.target)&&(!e.target.matches("#menu-btn"))){
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
        navBar.classList.remove("active");
    }
});
