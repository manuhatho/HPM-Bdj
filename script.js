function menuBar() {
  const head = document.querySelector(".header");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const menu = document.querySelector(".menu");
  const navBlend = document.querySelector(".navBlend");
  const nav = document.querySelector(".nav2");
  const html = document.querySelector("html");

  menu.addEventListener("click", () => {
    // console.log("click");
    head.classList.toggle("hide");
    html.classList.toggle("active");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    navBlend.classList.toggle("active");
    header.classList.toggle("hide");
    logo.classList.toggle("hide");
  });
}
menuBar();

function out() {
  const head = document.querySelector(".header");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const navBlend = document.querySelector(".navBlend");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav2");
  const html = document.querySelector("html");
  navBlend.addEventListener("click", () => {
    html.classList.toggle("active");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    navBlend.classList.toggle("active");
    head.classList.toggle("hide");
    header.classList.toggle("hide");
    logo.classList.toggle("hide");
  });
}
out();

// function headerScroll(){
const header = document.querySelector("header");
const head = document.querySelector(".header");

let prevY = 0;

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > prevY) {
    header.style.top = "-100px";
    head.style.top = "-100px";
  } else {
    header.style.top = "0";
    head.style.top = "0";
    head.classList.add("active");
  }
  prevY = scrollTop;
});

// setTimeout(diapo, 1000);

function scrollToTop() {
  const arrow = document.querySelector(".arrow-up");
  document.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  document.addEventListener("scroll", () => {
    // console.log('scroll');
    if (window.scrollY > 200) {
      arrow.classList.add("active");
    } else {
      arrow.classList.remove("active");
    }
  });
}
scrollToTop();

function resetForm() {
  const form = document.querySelector("form").reset();
  
  
 
}
resetForm();

function Donation() {
  const bar2 = document.querySelector(".bar2");
  const head = document.querySelector(".header");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const menu = document.querySelector(".menu");
  const navBlend = document.querySelector(".navBlend");
  const nav = document.querySelector(".nav2");
  const html = document.querySelector("html");
  const payment = document.querySelector(".payment");
  const donateLink = document.querySelectorAll(".link5");
  donateLink.forEach(function (link) {
    link.addEventListener("click", () => {
      payment.classList.toggle("active");
      head.classList.toggle("hide");
      html.classList.toggle("active");
      menu.classList.toggle("active");
      nav.classList.toggle("active");
      navBlend.classList.toggle("active");
      header.classList.toggle("hide");
      logo.classList.toggle("hide");
    });
  });
  bar2.addEventListener("click", () => {
    payment.classList.toggle("active");
    head.classList.toggle("hide");
    html.classList.toggle("active");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    navBlend.classList.toggle("active");
    header.classList.toggle("hide");
    logo.classList.toggle("hide");
    resetForm();
  });
}
Donation();

function paymentMethod() {
  const card = document.getElementById("carte");
  const orange = document.getElementById("orange");
  const mtn = document.getElementById("mtn");
  const way1 = document.querySelector(".way-1");
  const way2 = document.querySelector(".way-2");

  card.addEventListener("click", () => {
    way1.style.display = "block";
    way2.style.display = "none";
  });
  orange.addEventListener("click", () => {
    way1.style.display = "none";
    way2.style.display = "block";
  });
  mtn.addEventListener("click", () => {
    way1.style.display = "none";
    way2.style.display = "block";
  });
}
paymentMethod();
