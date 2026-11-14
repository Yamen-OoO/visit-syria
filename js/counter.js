let nums = document.querySelectorAll(".num");
let counter = document.querySelector(".counter-section");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    nums.forEach((n) => {
      let start = 0;
      let end = Number(n.dataset.num);

      let count = setInterval(() => {
        start++;
        n.textContent = start;
        if (start == end) {
          clearInterval(count);
        }
      }, 2000 / end);
    });
    observer.unobserve(counter);
  }
});

observer.observe(counter);