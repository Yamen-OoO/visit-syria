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