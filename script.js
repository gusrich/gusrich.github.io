// =================== ORDER WHATSAPP CTA ===================
const whatsappNumber = "6281210818919";

function orderPackage(packageName) {
  const message = `Halo Gusrich! Saya tertarik dengan paket ${packageName}. Bisa dijelaskan lebih lanjut?`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank");
}

// =================== SCROLL TO TOP ===================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =================== SCROLL REVEAL EFFECT ===================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);

// Jalankan saat awal load supaya elemen yang sudah terlihat langsung aktif
document.addEventListener('DOMContentLoaded', revealOnScroll);
