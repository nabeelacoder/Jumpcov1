document.addEventListener('scroll', ()=>{
    const header = document.querySelector("header");

    if(window.scrollY > 0){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }

})

//animation

// let sections = document.querySelector('.animation');

// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height= sec.offsetHeight;

//         if(top>= offset && top< offset + height){
//             sec.classList.add("show-animate");
//         } else{
//             sec.classList.remove("show-animate");
//         }
//     })
// }

// const accordions = document.querySelectorAll("[data-accordion]");
// let lastActiveAccordion = accordions[0];

// const initAccordion = function(currentAccordion){

//     const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

//     const expandAccordion = function(){
//         if(lastActiveAccordion && lastActiveAccordion != currentAccordion){
//             lastActiveAccordion.classList.remove("expanded");
//         } 

//         currentAccordion.classList.toggle("expanded");

//         lastActiveAccordion = currentAccordion;
//     }

//     accordionBtn.addEventListener("click", expandAccordion);
// }

// for(let i = 0, len= accordions.length; i < len; i++){
// initAccordion(accordions[i])
// }