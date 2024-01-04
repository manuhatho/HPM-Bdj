function menuBar(){
    const menu = document.querySelector(".menu");
    const  navBlend = document.querySelector(".navBlend");
    const nav = document.querySelector(".nav2");
    const html = document.querySelector("html");
   
    menu.addEventListener("click", ()=>{
        // console.log("click");
        html.classList.toggle("active"); 
        menu.classList.toggle("active");
        nav.classList.toggle("active");
        navBlend.classList.toggle("active");
    })
   
}
menuBar();

function out(){
    const  navBlend = document.querySelector(".navBlend");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav2");
    const html = document.querySelector("html");
    navBlend.addEventListener("click",()=>{
        html.classList.toggle("active"); 
        menu.classList.toggle("active");
        nav.classList.toggle("active");
        navBlend.classList.toggle("active");
    })
}
out();

// function headerScroll(){
    const header = document.querySelector("header");
    let prevY = 0
  
    document.addEventListener("scroll", ()=>{
       let scrollTop = window.scrollY || document.documentElement.scrollTop;
       if(scrollTop > prevY){
        header.style.top = "-100px";

       } else{
        header.style.top ="0"
        header.classList.add("active")
       }
       prevY = scrollTop;

    })
    
   
// }
// headerScroll();

