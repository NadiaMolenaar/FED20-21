// JavaScript Document


var openMenu = document.querySelector(".button-meer");
var nieuweArtikelen = document.querySelector(".nieuw-artikel");


openMenu.addEventListener("click", function() {
    // Tussen () staat het onderdeel dat aangesproken wordt in de html, namelijk de class verberg. 
    // Daarna wordt de tekst op de button gewijzigd op het moment dat erop geklikt is.
    if (nieuweArtikelen.classList.contains("verberg")){
    openMenu.textContent = "Minder nieuwe recepten";
    }
    
    else {
    openMenu.textContent = "Meer nieuwe recepten";
    }

    nieuweArtikelen.classList.toggle("verberg");
   }); 

/* openMenu.addEventListener("click", function() {
    console.log("button-meer");
    // Tussen () staat het onderdeel dat aangesproken wordt in de CSS. 
    // Ook wordt hier dmv style.display een styling gegeven aan de nieuwe artikelen
    if (nieuweArtikelen.style.display == "none") {
        nieuweArtikelen.style.display = "block";
        openMenu.textContent = "Minder nieuwe recepten";
        console.log("if");
    }

    else {
        nieuweArtikelen.style.display = "none";
        openMenu.textContent = "Meer nieuwe recepten";
        console.log("else");
    }
}); */

