let nums = document.querySelectorAll(".num");
let counter = document.querySelector(".counter-section");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {

    nums.forEach((n) => {
      let end = Number(n.dataset.num);
      let duration = 2000;
      let startTime = null;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;

        let progress = Math.min((timestamp - startTime) / duration, 1);

        n.textContent = Math.floor(progress * end);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          n.textContent = end;
        }
      }

      requestAnimationFrame(updateCounter);
    });

    observer.unobserve(counter);
  }
});

observer.observe(counter);