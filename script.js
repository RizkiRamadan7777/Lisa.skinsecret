/**
 * Untuk menambahkan produk baru:
 * 1. Buka file script.js.
 * 2. Di dalam array `products`, tambahkan objek dengan properti berikut:
 *    - id: angka unik (misal 6, 7, dst.)
 *    - title: "Lisa Skin Secret - Nama Produk"
 *    - image: URL gambar (ukuran minimal 300x300)
 *    - category: "Makeup" | "Skincare" | "Rambut" | "Kulit"
 *    - url: link affiliate Shopee
 *
 * Contoh:
 * {
 *   id: 6,
 *   title: "Lisa Skin Secret - Contoh Produk",
 *   image: "https://via.placeholder.com/300x300?text=Contoh+Produk",
 *   category: "Makeup",
 *   url: "https://shopee.co.id/affiliate-link-contoh"
 * }
 */

const products = [
  {
    id: 1,
    title: "Lisa Skin Secret - Serum Vitamin C",
    image: "https://via.placeholder.com/300x300?text=Serum+Vitamin+C",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-serum-vitc"
  },
  {
    id: 2,
    title: "Lisa Skin Secret - Masker Lumpur",
    image: "https://via.placeholder.com/300x300?text=Masker+Lumpur",
    category: "Skincare",
    url: "https://shopee.co.id/affiliate-link-masker-lumpur"
  },
  {
    id: 3,
    title: "Lisa Skin Secret - Lipstik Matte",
    image: "https://via.placeholder.com/300x300?text=Lipstik+Matte",
    category: "Makeup",
    url: "https://shopee.co.id/affiliate-link-lipstik-matte"
  },
  {
    id: 4,
    title: "Lisa Skin Secret - Shampoo Anti-Rontok",
    image: "https://via.placeholder.com/300x300?text=Shampoo+Anti-Rontok",
    category: "Rambut",
    url: "https://shopee.co.id/affiliate-link-shampoo"
  },
  {
    id: 5,
    title: "Lisa Skin Secret - Body Lotion Whitening",
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

    filtered.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="card-content">
          <span class="card-number">${index + 1}.</span>
          <h3 class="card-title">${p.title}</h3>
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
