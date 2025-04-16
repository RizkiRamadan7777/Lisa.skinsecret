const products = [
  {
    id: 1,
    title: "Lisa Skin Secret - Serum Vitamin C",
    image: "https://via.placeholder.com/300x300?text=Serum+C",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-serum-c"
  },
  {
    id: 2,
    title: "Lisa Skin Secret - Masker Wajah",
    image: "https://via.placeholder.com/300x300?text=Masker",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-masker"
  },
  {
    id: 3,
    title: "Lisa Skin Secret - Lipstik Matte",
    image: "https://via.placeholder.com/300x300?text=Lipstik",
    category: "Makeup",
    url: "https://shopee.co.id/affiliate-link-lipstik"
  },
  {
    id: 4,
    title: "Lisa Skin Secret - Sikat Pembersih Wajah",
    image: "https://via.placeholder.com/300x300?text=Sikat+Wajah",
    category: "Rambut",
    url: "https://shopee.co.id/affiliate-link-sikat"
  },
  {
    id: 5,
    title: "Lisa Skin Secret - Pelembab Kulit",
    image: "https://via.placeholder.com/300x300?text=Pelembab",
    category: "Kulit",
    url: "https://shopee.co.id/affiliate-link-pelembab"
  },
  // Tambahkan produk baru di sini:
  // { id: X, title: "...", image: "...", category: "Makeup/Skincare/Rambut/Kulit", url: "..." }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // isi kategori otomatis
  const cats = ["all", ...new Set(products.map(p => p.category))];
  cats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat === "all" ? "Semua Kategori" : cat;
    categoryFilter.appendChild(opt);
  });

  function renderItems() {
    const term = searchInput.value.toLowerCase();
    const selCat = categoryFilter.value;

    grid.innerHTML = "";
    const filtered = products.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(term);
      const matchCat = selCat === "all" || p.category === selCat;
      return matchSearch && matchCat;
    });

    filtered.forEach((p, idx) => {
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
