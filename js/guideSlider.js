const title = document.querySelector(".modal-title");
const type_1 = document.querySelector(".modal-type-1");
const type_2 = document.querySelector(".modal-type-2");
const type_3 = document.querySelector(".modal-type-3");
const desc = document.querySelector(".modal-desc");
const star_1 = document.querySelector(".modal-star-1");
const star_2 = document.querySelector(".modal-star-2");
const star_3 = document.querySelector(".modal-star-3");
const star_4 = document.querySelector(".modal-star-4");
const star_5 = document.querySelector(".modal-star-5");
const myLocation = document.querySelector(".modal-location");
const workTime = document.querySelector(".modal-workTime");
const open_close = document.querySelector(".modal-open-close");
const phone = document.querySelector(".modal-phone");
const featureContainer = document.querySelector(".modal-card-icons");
const imgSwiper = document.querySelector(".modal-images-swiper");
const images_1 = document.querySelector(".modal-img-grid");
const images_2 = document.querySelector(".image-grid");
const detailsBtn = document.querySelector(".modal-cardDetails-button")
const detailsBtn_2 = document.querySelector(".modal-cardDetails-button-2")
const servicesCard = document.querySelector(".modal-card-1");
const atmospheresCard = document.querySelector(".modal-card-2");
const equipmentCard = document.querySelector(".modal-card-3");
const paymentCard = document.querySelector(".modal-card-4");
const card_5_icon_1 = document.querySelector(".card-5-icon-1")
const card_5_text_1 = document.querySelector(".card-5-text-1")
const limitsCard = document.querySelector(".modal-card-6")
const buttons = document.querySelectorAll(".open-modal-button");



let lang = "en";

let resturantsArray = [];
let cafeArray = [];
let nightClubArray = [];
let landmarkArray = [];
let hotelArray = [];

let jsonFile = lang === "en" ? "./places-en.json" : "./places.json"

fetch(jsonFile)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load places.json");
    }
    return response.json();
  })
  .then((data) => {
    resturantsArray = data.resturantsArray;
    cafeArray = data.cafeArray;
    nightClubArray = data.nightClubArray;
    landmarkArray = data.landmarkArray;
    hotelArray = data.hotelArray;

    const allArrays = [
      ...resturantsArray,
      ...cafeArray,
      ...nightClubArray,
      ...landmarkArray,
      ...hotelArray,
    ];

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        title.textContent ="" ;
        type_1.textContent = "";
        type_2.textContent = "";
        type_3.textContent = "";
        desc.textContent = "";
        star_1.src = "";
        star_2.src = "";
        star_3.src = "";
        star_4.src = "";
        star_5.src = "";
        myLocation.textContent = "";
        workTime.textContent = "";
        open_close.textContent = "";
        phone.textContent = "";
         imgSwiper.innerHTML = "";
        images_1.innerHTML = "";
images_2.querySelectorAll(":scope > img").forEach((img) => img.remove());
        detailsBtn.textContent = ""
        detailsBtn_2.textContent = ""
        featureContainer.innerHTML = "";
        servicesCard.innerHTML = "";
        atmospheresCard.innerHTML = "";
        equipmentCard.innerHTML = "";
        paymentCard.innerHTML = "";
        card_5_text_1.textContent = ""
        limitsCard.innerHTML = "";
        const placeId = btn.dataset.placeId;

    const data = allArrays.find(
      (place) => place.id === placeId
    );

    if (!data) {
      console.error(`Place not found: ${placeId}`);
      return;
    }
       
        title.textContent = data.name;
        type_1.textContent = data.type_1;
        type_2.textContent = data.type_2;
        type_3.textContent = data.type_3;
        desc.textContent = data.desc;
        star_1.src = data.star_1;
        star_2.src = data.star_2;
        star_3.src = data.star_3;
        star_4.src = data.star_4;
        star_5.src = data.star_5;
        myLocation.textContent = data.location;
        workTime.textContent = data.workTime;
        open_close.textContent = data.open_close;
        phone.textContent = data.phone;
        

        data.swiperImages.forEach((image) => {
          imgSwiper.innerHTML += `<div class="swiper-slide">
                          <img
                            src="${image.img}"
                            alt=""
                          />
                        </div>`;
        });

        data.imgGrid_1.forEach((image1) => {
          images_1.innerHTML += `<img
                          src="${image1.img}"
                          alt=""
                        />
                        <div class="modal-swiper-span">
                          <span>${image1.moreImg}</span>
                        </div>`;
        });
        data.imgGrid_2.forEach((image2) => {
          const img = document.createElement("img");

  img.src = image2.img;
  img.alt = "";

  images_2.appendChild(img); 
        });

        detailsBtn.textContent = data.showDetails
        detailsBtn_2.textContent = data.showDetails_2

        data.features.forEach((feature) => {
          featureContainer.innerHTML += `<div class="icon">
                      <img src="${feature.icon}" alt="" />
                      <span class="light-text-gray-2">${feature.text}</span>
                    </div>`;
        });

        data.servicesCardTitle.forEach((servicesTitle) => {
          servicesCard.innerHTML += `<div class="d-flex align-items-center gap-2 mb-2">
                            <img src="${servicesTitle.icon}" alt="" />
                            <h5 class="ar-h5 primary-7 mb-0">${servicesTitle.text}</h5>
                          </div>`;
        });
        data.servicesCardDetails.forEach((service) => {
          servicesCard.innerHTML += `<div class="d-flex gap-2 me-2">
                          <img src="${service.icon}" alt="" />
                          <p class="ar-pargraph m-0">${service.text}</p>
                        </div>`;
        });

        data.atmospheresCardTitle.forEach((atmospheresTitle) => {
          atmospheresCard.innerHTML += `<div class="d-flex align-items-center gap-2 mb-2">
                            <img src="${atmospheresTitle.icon}" alt="" />
                            <h5 class="ar-h5 primary-7 mb-0">${atmospheresTitle.text}</h5>
                          </div>`;
        });
        data.atmospheresCardDetails.forEach((atmosphere) => {
          atmospheresCard.innerHTML += `<div class="d-flex gap-2 me-2">
                          <img src="${atmosphere.icon}" alt="" />
                          <p class="ar-pargraph m-0">${atmosphere.text}</p>
                        </div>`;
        });


        data.equipmentCardTitle.forEach((equipmentTitle) => {
          equipmentCard.innerHTML += `<div class="d-flex align-items-center gap-2 mb-2">
                            <img src="${equipmentTitle.icon}" alt="" />
                            <h5 class="ar-h5 primary-7 mb-0">${equipmentTitle.text}</h5>
                          </div>`;
        });
      

        data.equipmentCardDetails.forEach((equipment) => {
          equipmentCard.innerHTML += `<div class="d-flex gap-2 me-2">
                          <img src="${equipment.icon}" alt="" />
                          <p class="ar-pargraph m-0">${equipment.text}</p>
                        </div>`;
        });
      


        data.paymentCardTitle.forEach((paymentTitle) => {
          paymentCard.innerHTML += `<div class="d-flex align-items-center gap-2 mb-2">
                            <img src="${paymentTitle.icon}" alt="" />
                            <h5 class="ar-h5 primary-7 mb-0">${paymentTitle.text}</h5>
                          </div>`;
        });
        data.paymentCardDetails.forEach((payment) => {
          paymentCard.innerHTML += `<div class="d-flex gap-2 me-2">
                          <img src="${payment.icon}" alt="" />
                          <p class="ar-pargraph m-0">${payment.text}</p>
                        </div>`;
        });

        card_5_text_1.textContent = data.moreInformationCardDetailsText

        data.limitsCardTitle.forEach((limitTitle) => {
          limitsCard.innerHTML += `<div class="d-flex align-items-center gap-2 mb-2">
                            <img src="${limitTitle.icon}" alt="" />
                            <h5 class="ar-h5 primary-7 mb-0">${limitTitle.text}</h5>
                          </div>`;
        });
        data.limitsCardDetails.forEach((limit) => {
          limitsCard.innerHTML += `<div class="d-flex gap-2 me-2">
                          <img src="${limit.icon}" alt="" />
                          <p class="ar-pargraph m-0">${limit.text}</p>
                        </div>`;
        });

      });
    });
  })
  .catch((error) => console.error(error));

const swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 45,
  centerSlide: "true",
  fade: "true",
  loop: true,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
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
