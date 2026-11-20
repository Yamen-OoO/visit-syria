const title = document.querySelector(".modal-title");
const buttons = document.querySelectorAll(".open-modal-button")


let lang = 'ar'

const resturantsArray = [
   {
    name: "La Capital Damascus",
    description: "this is La Capital Damascus",
  },
  {
    name: "Cali",
    description: "this is cali",
  },
  {
    name: "resturant 3",
    description: "this is resturant 3",
  },
  {
    name: "resturant 4",
    description: "resturant 4",
  },
 
];

const cafeArray = [
  {
    name: "القشلة",
    description: "this is qashla",
  },
  {
    name: "R house",
    description: "this is R house",
  },
  {
    name: "cafe 3",
    description: "this is cafe 3",
  },
  {
    name: "cafe 4",
    description: "this is cafe 4",
  },
];

const nightClubArray = [
  {
    name: "viva rooftop",
    description: "this is viva rooftop",
  },
  {
    name: "La joia Rooftop",
    description: "this is La joia Rooftop",
  },
  {
    name: "nightClub 3",
    description: "this is nightClub 3",
  },
  {
    name: "nightClub 4",
    description: "this is nightClub 4",
  },
];

const landmarkArray = [
  {
    name: "محطة الحجاز",
    description: "this is محطة الحجاز",
  },
  {
    name: "Straight Street Bab Sharqi",
    description: "this is Straight Street Bab Sharqi",
  },
  {
    name: "landmark 3",
    description: "this is landmark 3",
  },
  {
    name: "landmark 4",
    description: "this is landmark 4",
  },
];

const hotelArray = [
  {
    name: "Golden Mazzeh",
    description: "this is Golden Mazzeh",
  },
  {
    name: "النوفرة",
    description: "this is النوفرة",
  },
  {
    name: "hotel 3",
    description: "this is hotel 3",
  },
  {
    name: "hotel 4",
    description: "this is hotel 4",
  },
];

const allArrays = [...resturantsArray, ...cafeArray, ...nightClubArray, ...landmarkArray, ...hotelArray]

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const data = allArrays[index]
    title.textContent = data.name
  })
})

const swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 45,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

const modalSwiper = new Swiper(".modal-images", {
  slidesPerView: 1,
  nested: true,
  navigation: {
    nextEl: ".modal-next",
    prevEl: ".modal-prev",
  },
});
