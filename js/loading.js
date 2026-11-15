/*
  منطق العداد (شاشة التحميل 10 ثوانٍ)
  يقوم بالعد التنازلي ثم إخفاء الشاشة وتفعيل تصفح الموقع
 */

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    let timeLeft = 10;

    const countdownInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);

            if (loadingScreen) {
                loadingScreen.classList.add("loading-hidden");
            }
        }
    }, 1000);
});
