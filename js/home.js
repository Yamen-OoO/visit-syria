 const heroImg = document.getElementById('heroImage');
 const slides = [
        { src: './images/others/backgroundHome.png', alt: 'نواعير حماة والقناطر الحجرية القديمة على نهر العاصي' },
        { src: './images/others/horse.png', alt: 'نواعير حماة والقناطر الحجرية القديمة على نهر العاصي' },
        { src: './images/others/backgroundHome.png', alt: 'نواعير حماة والقناطر الحجرية القديمة على نهر العاصي' }
    ];
    
       let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;

    heroImg.src = slides[currentSlide].src;
    heroImg.alt = slides[currentSlide].alt;
}, 5000);

/* ========Buttons for images in services======== */

const tabs = document.querySelectorAll(".section3-tab");
const imageList = document.querySelector(".service1-section3-images");
const images={
    landmarks:[
         "./images/governorates/Damascus/landmarks/landmarks_02.jpg",
        "./images/governorates/Damascus/landmarks/landmarks_03.jpg",
        "./images/governorates/Damascus/landmarks/landmarks_04.jpg"
    ],
    restaurants:[
         "./images/governorates/Damascus/Restaurants/Restaurants_01.jpg",
        "./images/governorates/Damascus/Restaurants/Restaurants_02.jpg",
        "./images/governorates/Damascus/Restaurants/Restaurants_03.jpg"
    ],
    hotels:[
         "./images/governorates/Damascus/Hotel/hotel_01.jpg",
        "./images/governorates/Damascus/Hotel/hotel_02.jpg",
        "./images/governorates/Damascus/Hotel/hotel_03.jpg"
    ]
}
    tabs.forEach(tab=>{
        tab.addEventListener("click" ,  ()=>{
            let category = tab.dataset.category;
        
                imageList.innerHTML = images[category].map(src=>`<li><img src="${src}" alt=""></li>`).join("");
            
            
         
            tabs.forEach(button=>{
                button.classList.remove("active")
            });
            tab.classList.add("active")
        });
    });


    //   for(let i in images){
    //     console.log(images[i])
    //     images[i].map(p=>{
    //         console.log(p)
    //     })
    //   }
        //    images