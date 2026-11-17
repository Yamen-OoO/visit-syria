const productsData = [
    {
        id: 1,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
    {
        id: 2,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الياسمين الدمشقي",
        image: "./images/products/handbag_02.png"
    },
    {
        id: 3,
        category: "bags",
        categoryAr: "حقيبة",
        title: "عبق الشرق",
        image: "./images/products/handbag_03.png"
    },
    {
        id: 4,
        category: "sweaters",
        categoryAr: "كنزة",
        title: "تراث الشام",
        image: "./images/products/Sweater_01.jpg"
    },
    {
        id: 5,
        category: "sweaters",
        categoryAr: "كنزة",
        title: "شتاء دمشق",
        image: "./images/products/Sweater_02.jpg"
    },
    {
        id: 6,
        category: "prints",
        categoryAr: "مطبوعات",
        title: "لوحة باب شرقي",
        image: "./images/products/handbag_04.png"
    },
    {
        id: 7,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
    {
        id: 8,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
    {
        id: 9,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
    {
        id: 10,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
    {
        id: 11,
        category: "bags",
        categoryAr: "حقيبة",
        title: "الحب من سوريا",
        image: "./images/products/handbag_01.png"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");
    const filterButtons = document.querySelectorAll(".btn-filter");

    function renderProducts(filterCategory) {
        productsContainer.innerHTML = "";

        const filteredProducts = filterCategory === "all"
            ? productsData
            : productsData.filter(product => product.category === filterCategory);

        filteredProducts.forEach(product => {
            const productHTML = `
                <div class="col-12 col-md-6 col-lg-4 fade-in-card">
                    <article class="product-card">
                        <img src="${product.image}" class="mb-4 img-fluid" alt="${product.title}" loading="lazy">
                        <p class="m-0 ar-font ar-pargraph">${product.categoryAr}</p>
                        <h3 class="mt-2 ar-font ar-h3">${product.title}</h3>
                    </article>
                </div>
            `;
            productsContainer.insertAdjacentHTML("beforeend", productHTML);
        });
    }

    const initialActiveBtn = document.querySelector(".btn-filter.active");
    const initialCategory = initialActiveBtn ? initialActiveBtn.getAttribute("data-filter") : "all";
    renderProducts(initialCategory);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedFilter = button.getAttribute("data-filter");
            renderProducts(selectedFilter);
        });
    });
});