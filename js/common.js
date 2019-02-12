$(document).ready(function () {
    // menu toggle BEGIN

    // var menu = document.querySelector(".menu");
    // menu.addEventListener('click', function () { 
    //     menu.classList.toggle("active");
    // });

     $(".menu").on("click", function () { 
         $(this).toggleClass("active");
         $(".overlay").toggleClass("menu-open");
      });
     $(".nav a").on("click", function () { 
        $(".menu").toggleClass("active");
        $(".overlay").toggleClass("menu-open");
      });
    // menu toggle END
});