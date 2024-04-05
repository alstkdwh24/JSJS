/* ==========좌측사이드========== */

var menuBtn = document.querySelector(".menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener("click", function() {

    sidenav.classList.toggle("active");
    // if(sidenav.style.width == "0px" || sidenav.style.width == "") {
    //     sidenav.style.width = "100%";
    // } else {
    //     sidenav.style.width = "0px";
    // }

})
