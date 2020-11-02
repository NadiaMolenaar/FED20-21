// JavaScript Document


var openMenu = document.querySelector(".button-meer");
var nieuweArtikelen = document.querySelector(".nieuwe-artikelen");

openMenu.addEventListener("click", function() {
    console.log("button-meer");
    // Tussen () staat het onderdeel dat aangesproken wordt in de CSS
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
});


/* var deP = document.querySelector("p");

deP.addEventListener("click", ietsDoen);

function ietsDoen() {
    deP.classList.add(“anders");
} */