const products = [
  { id: 1, title: "Lisa Skin Secret - Serum Vitamin C", image: "https://via.placeholder.com/300?text=Serum+C", category: "Skincare", url: "https://shopee.co.id/affiliate-link-serum-c" },
  { id: 2, title: "Lisa Skin Secret - Masker Wajah",       image: "https://via.placeholder.com/300?text=Masker", category: "Skincare", url: "https://shopee.co.id/affiliate-link-masker" },
  { id: 3, title: "Lisa Skin Secret - Lipstik Matte",      image: "https://via.placeholder.com/300?text=Lipstik", category: "Makeup",   url: "https://shopee.co.id/affiliate-link-lipstik" },
  { id: 4, title: "Lisa Skin Secret - Hair Serum",         image: "https://via.placeholder.com/300?text=Hair+Serum", category: "Rambut", url: "https://shopee.co.id/affiliate-link-hair-serum" },
  { id: 5, title: "Lisa Skin Secret - Body Lotion",        image: "https://via.placeholder.com/300?text=Body+Lotion", category: "Kulit", url: "https://shopee.co.id/affiliate-link-lotion" },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // populate categories
  const categories = ["all", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat === "all" ? "Semua Kategori" : cat;
    categoryFilter.appendChild(opt);
  });

  function renderItems() {
    const term = searchInput.value.toLowerCase();
    const selCat = categoryFilter.value;
    grid.innerHTML = "";

    products
      .filter(p => (selCat === "all" || p.category === selCat) && p.title.toLowerCase().includes(term))
      .forEach((p, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-number">${idx + 1}</div>
          <img src="${p.image}" alt="${p.title}" />
          <div class="card-content">
            <h3 class="card-title">${p.title}</h3>
            <a href="${p.url}" target="_blank" class="card-button">Lihat di Shopee</a>
          </div>
        `;
        grid.appendChild(card);
      });
  }

  searchInput.addEventListener("input", renderItems);
  categoryFilter.addEventListener("change", renderItems);
  renderItems();
});
