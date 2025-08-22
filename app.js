
async function loadJSON(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load " + url);
  return res.json();
}
function applyTheme(settings) {
  document.documentElement.style.setProperty("--primary", settings.primaryColor || "#000000");
  document.documentElement.style.setProperty("--accent", settings.accentColor || "#D4AF37");
  document.documentElement.style.setProperty("--text-on-primary", settings.textOnPrimary || "#FFFFFF");
  const brandEl = document.querySelector("#brandName");
  if (brandEl) brandEl.textContent = settings.brandName || "Brand";
  const h1 = document.querySelector("#heroHeadline");
  const p = document.querySelector("#heroSubheadline");
  if (h1) h1.textContent = settings.hero?.headline || "";
  if (p) p.textContent = settings.hero?.subheadline || "";
  const phone = document.querySelector("#contactPhone");
  const insta = document.querySelector("#contactInsta");
  const wa = document.querySelector("#contactWA");
  if (phone) phone.textContent = settings.contact?.phone || "";
  if (insta) insta.href = settings.contact?.instagram || "#";
  if (wa) wa.href = settings.contact?.whatsapp ? ("https://wa.me/" + settings.contact.whatsapp.replace(/\D/g,'')) : "#";
}
function formatINR(amount){
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}
function renderProducts(products){
  const grid = document.querySelector("#productsGrid");
  grid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = (p.images && p.images[0]) || "https://via.placeholder.com/600x400?text=Image";
    img.alt = p.title;
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML = \`
      <div class="card-title">\${p.title}</div>
      <div class="price">\${formatINR(p.price)}</div>
      <div class="meta">\${p.category || ""} • \${p.in_stock ? "In stock" : "Out of stock"}</div>
      <a class="cta" href="https://wa.me/91XXXXXXXXXX?text=Interested%20in%20\${encodeURIComponent(p.title)}%20(\${formatINR(p.price)})">Enquire on WhatsApp</a>
    \`;
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
}
(async () => {
  try {
    const settings = await loadJSON("/data/settings.json");
    applyTheme(settings);
    const products = await loadJSON("/data/products.json");
    renderProducts(products);
  } catch (e) {
    console.error(e);
  }
})();