// JavaScript Document

console.log("button-meer")
var openMenu = document.getElementsByClassName("button-meer");

openMenu.addEventListener("click", openen);

function openen() {
    openMenu.classList.toggle("");
}

/* var deP = document.querySelector("p");

deP.addEventListener("click", ietsDoen);

function ietsDoen() {
    deP.classList.add(“anders");
} */
