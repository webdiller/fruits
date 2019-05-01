window.addEventListener("load", function(event) {
  $(".menu").on("click", function () { 
    $(this).toggleClass("active");
    $(".overlay").toggleClass("menu-open");
 });
$(".nav a").on("click", function () { 
   $(".menu").toggleClass("active");
   $(".overlay").toggleClass("menu-open");
 });
 var preloader = document.querySelector(".preloader");
 var mainTextH1 = document.querySelector(".main-text h1");
 var mainTextH2 = document.querySelector(".main-text h2");
 var mainTextMainBtn = document.querySelector(".main-text a");
  if(!preloader.classList.contains("done")) {
    setTimeout(function () { 
      preloader.classList.add("done");
      mainTextH1.classList.add("animate-h1");
      mainTextH2.classList.add("animate-h2");
      mainTextMainBtn.classList.add("animate-btn");
    },1000)
  }

});
