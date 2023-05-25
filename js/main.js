let span = document.querySelector(".up");
let header = document.getElementById("header")

window.onscroll = function () {
  
  this.scrollY >= 500 ? span.classList.add("active") : span.classList.remove("active");
  this.scrollY >= 250 ? header.classList.add("header_2") : header.classList.remove("header_2");

};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let swiper1 = new Swiper("#slide_content1", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#swiper1 .swiper-button-next",
        prevEl: "#swiper1 .swiper-button-prev",
      },
      breakpoints:{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,   
        },
        950: {
          slidesPerView: 4,
        },
       },
    });
// 

let swiper2 = new Swiper("#slide_content2", {
     slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#swiper2 .swiper-button-next",
        prevEl: "#swiper2 .swiper-button-prev",
      },
      breakpoints:{
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,   
        },
        950: {
          slidesPerView: 1,
        },
       },
    });

// 
let swiper3 = new Swiper("#slide_content3", {
  slidesPerView: 4,
   spaceBetween: 20,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: "#swiper3 .swiper-button-next",
     prevEl: "#swiper3 .swiper-button-prev",
   },
   breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,   
    },
    950: {
      slidesPerView: 4,
    },
   },
 });

