const products = [
  // Contoh produk:
  // {
  //   id: 1,
  //   title: "Contoh Produk",
  //   image: "https://via.placeholder.com/300",
  //   category: "Skincare",
  //   url: "https://shopee.co.id/affiliate-link"
  // },
  // Tambahkan produk di bawah ini
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // Generate kategori
  const categories = ["all", ...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(opt);
  });

  function renderItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCat = categoryFilter.value;

    grid.innerHTML = "";
    const filtered = products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm);
      const matchesCat = selectedCat === "all" || p.category === selectedCat;
      return matchesSearch && matchesCat;
    });

    filtered.forEach((p, idx) => {
      const number = idx + 1;
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-number">No. ${number}</div>
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
