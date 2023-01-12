'use strict';

 const hamburger = document.querySelector(".navbar-collapse");
 const navLink = document.querySelectorAll(".nav-link-hamburger");

 for (let i = 0; i < navLink.length; i++) {
   navLink[i].addEventListener("click", removeHamburger);
 }

 function removeHamburger() {
   hamburger.classList.remove("show");
 }

  $(document).ready(function () {
    $("#Modal").modal("show");
  });

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);

const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
