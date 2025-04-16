const products = [
  {
    id: 1,
    title: "Lisa Skin Secret - Serum Vitamin C",
    price: "Rp 150.000",
    image: "https://imgur.com/YKPJHbG",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-serum-vitc"
  },
  {
    id: 2,
    title: "Lisa Skin Secret - Masker Lumpur",
    price: "Rp 75.000",
    image: "https://imgur.com/n8MVi0O",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-masker-lumpur"
  },
  {
    id: 3,
    title: "Lisa Skin Secret - Lipstik Matte",
    price: "Rp 120.000",
    image: "https://imgur.com/jI9NpYP",
    category: "Makeup",
    url: "https://shopee.co.id/affiliate-link-lipstik-matte"
  },
  {
    id: 4,
    title: "Lisa Skin Secret - Shampoo Anti-Rontok",
    price: "Rp 90.000",
    image: "https://via.placeholder.com/300x300?text=Shampoo+Anti-Rontok",
    category: "Rambut",
    url: "https://shopee.co.id/affiliate-link-shampoo"
  },
  {
    id: 5,
    title: "Lisa Skin Secret - Body Lotion Whitening",
    price: "Rp 85.000",
    image: "https://via.placeholder.com/300x300?text=Body+Lotion",
    category: "Kulit",
    url: "https://shopee.co.id/affiliate-link-body-lotion"
  }
  // Tambahkan produk lainnya sesuai format di atas
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const header = document.getElementById("header");

  function renderItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCat = categoryFilter.value;

    grid.innerHTML = "";

    const filtered = products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm);
      const matchesCat = selectedCat === "all" || p.category === selectedCat;
      return matchesSearch && matchesCat;
    });

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="card-content">
          <div>
            <h3 class="card-title">${p.title}</h3>
            <p class="card-price">${p.price}</p>
          </div>
          <a href="${p.url}" target="_blank" class="card-button">Beli di Shopee</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", renderItems);
  categoryFilter.addEventListener("change", renderItems);
  renderItems();

  // Shrink header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});
