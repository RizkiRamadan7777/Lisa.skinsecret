const products = [
  // Skincare
  {
    id: 1,
    title: "Lisa Skin Secret Tinted Sunscreen",
    image: "https://via.placeholder.com/300x300?text=Sunscreen",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-sunscreen"
  },
  {
    id: 2,
    title: "Lisa Skin Secret Hydrating Serum",
    image: "https://via.placeholder.com/300x300?text=Serum",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-serum"
  },

  // Makeup
  {
    id: 3,
    title: "Lisa Skin Secret Matte Lipstick",
    image: "https://via.placeholder.com/300x300?text=Lipstick",
    category: "Makeup",
    url: "https://shopee.co.id/affiliate-link-lipstick"
  },
  {
    id: 4,
    title: "Lisa Skin Secret Liquid Foundation",
    image: "https://via.placeholder.com/300x300?text=Foundation",
    category: "Makeup",
    url: "https://shopee.co.id/affiliate-link-foundation"
  },

  // Rambut
  {
    id: 5,
    title: "Lisa Skin Secret Hair Growth Oil",
    image: "https://via.placeholder.com/300x300?text=Hair+Oil",
    category: "Rambut",
    url: "https://shopee.co.id/affiliate-link-hairoil"
  },
  {
    id: 6,
    title: "Lisa Skin Secret Anti-Dandruff Shampoo",
    image: "https://via.placeholder.com/300x300?text=Shampoo",
    category: "Rambut",
    url: "https://shopee.co.id/affiliate-link-shampoo"
  },

  // Kulit
  {
    id: 7,
    title: "Lisa Skin Secret Body Lotion",
    image: "https://via.placeholder.com/300x300?text=Body+Lotion",
    category: "Kulit",
    url: "https://shopee.co.id/affiliate-link-lotion"
  },
  {
    id: 8,
    title: "Lisa Skin Secret Exfoliating Scrub",
    image: "https://via.placeholder.com/300x300?text=Scrub",
    category: "Kulit",
    url: "https://shopee.co.id/affiliate-link-scrub"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // generate kategori dari data
  const categories = ["All", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  function renderItems() {
    const term = searchInput.value.toLowerCase();
    const selCat = categoryFilter.value;
    grid.innerHTML = "";

    const filtered = products.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(term);
      const matchCat = selCat === "All" || p.category === selCat;
      return matchSearch && matchCat;
    });

    filtered.forEach((p, idx) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="badge">${idx + 1}</div>
        <img src="${p.image}" alt="${p.title}" />
        <div class="card-content">
          <h3 class="card-title">${p.title}</h3>
          <a href="${p.url}" target="_blank" class="card-button">
            Lihat di Shopee
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", renderItems);
  categoryFilter.addEventListener("change", renderItems);
  renderItems();
});
