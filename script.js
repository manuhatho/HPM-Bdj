function menuBar(){
    const head = document.querySelector(".header");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");
    const  navBlend = document.querySelector(".navBlend");
    const nav = document.querySelector(".nav2");
    const html = document.querySelector("html");
   
    menu.addEventListener("click", ()=>{
        // console.log("click");
        head.classList.toggle("hide");
        html.classList.toggle("active"); 
        menu.classList.toggle("active");
        nav.classList.toggle("active");
        navBlend.classList.toggle("active");
        header.classList.toggle("hide");
        logo.classList.toggle("hide");

    })
   
}
menuBar();

function out(){
    const head = document.querySelector(".header");
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo");
    const  navBlend = document.querySelector(".navBlend");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav2");
    const html = document.querySelector("html");
    navBlend.addEventListener("click",()=>{
       
        html.classList.toggle("active"); 
        menu.classList.toggle("active");
        nav.classList.toggle("active");
        navBlend.classList.toggle("active");
        head.classList.toggle("hide");
        header.classList.toggle("hide");
        logo.classList.toggle("hide");
       
    })
}
out();

// function headerScroll(){
    const header = document.querySelector("header");
    const head = document.querySelector(".header");
   
    let prevY = 0
  
    document.addEventListener("scroll", ()=>{
       let scrollTop = window.scrollY || document.documentElement.scrollTop;
       if(scrollTop > prevY){
           header.style.top = "-100px";
           head.style.top = "-100px";
           
     

       } else{
        header.style.top ="0";
        head.style.top ="0";
        head.classList.add("active");
        
       }
       prevY = scrollTop;

    })
    
    let imageIndex = 0;

    function diapo(){
  
        let images = document.getElementsByClassName('image');
  
        for(i = 0; i < images.length; i++){
            images[i].style.display = "none";
        }
        imageIndex++;
    
        if(imageIndex >= images.length){
          imageIndex = 0;
        }
        images[imageIndex].style.display = "block";
        

        setTimeout(diapo,7000);
          
      
    }
    diapo();
    // setTimeout(diapo, 1000);
    
    