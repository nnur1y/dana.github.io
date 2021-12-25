    window.addEventListener("load", ()=>{
        document.body.classList.remove("preload")
    });
   
    document.addEventListener("DOMContentLoaded", () =>{
        const nav = document.querySelector(".nav");

        document.querySelector("#btnNav").addEventListener("click", () =>{
            nav.classList.add("nav--open");
        });

        document.querySelector(".nav__overlay").addEventListener("click", () =>{
            nav.classList.remove("nav--open");
        });
        document.querySelector(".nav__link--active").addEventListener("click", () =>{
            nav.classList.remove("nav--open");
        });
    });



    $(function(){ 
     /*   $("#header").load("header.html");  */
        $("#footer").load("footer11.html"); 
        $("#banner").load("banner.html"); 
      }); 


      /*preload*/
	window.onload = function() {
		setTimeout(function() {
			document.getElementById("preloader_malc").style.display = "none";
		}, 400);

	};