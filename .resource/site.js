﻿function scrollToTop(){let t=document.documentElement,n=t.scrollTop,i=setInterval(function(){n>0?(n-=50,t.scrollTop=n):clearInterval(i)},1)}function calcContentSector(n){return Math.trunc(parseInt(n,10)/1e3).toString(16)}window.addEventListener("load",function(){let n="https://indrecap.com";document.querySelector("header").insertAdjacentHTML("afterbegin",` <div class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> <div class="container"> <a id="brand" class="navbar-brand fw-bolder" href="${n}"> Indrecap<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg> </a> <div> <a id="search" class="btn btn-sm btn-outline-accessibility" href="${n}/search.html"> <i class="ir ir-search me-2"></i>search </a> </div> </div> </div> `);document.querySelector("footer").insertAdjacentHTML("afterbegin",` <div class="container py-5"> <div class="row"> <div class="col-lg-8 pt-lg-2 text-white fw-bolder"> <p> <span class="me-2">Copyright © since 2023 by Indrecap, All Rights Reserved.</span> <a href="${n}/privacy.html" class="text-white fw-normal text-decoration-none me-2"><i class="ir ir-shield me-1"></i>Privacy Policy</a> <a href="${n}/contact.html" class="text-white fw-normal text-decoration-none"><i class="ir ir-mail me-1"></i>Contact</a> </p> </div> <div class="col-lg-4 text-end"> <button id="backTop" class="btn btn-sm btn-outline-light"><i class="ir ir-arrow-up me-2"></i>Back to top</button> </div> </div> </div> `);document.documentElement.setAttribute("lang","en");document.head.querySelector("link").insertAdjacentHTML("beforebegin",`<link rel="canonical" href="${window.location.href}">`);document.getElementById("backTop").addEventListener("click",function(){scrollToTop()})})