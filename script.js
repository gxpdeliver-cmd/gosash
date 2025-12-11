/* ================================
   MOBILE MENU TOGGLE
================================ */
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}

/* ================================
   LIVE FEED TICKER
================================ */
const feeds = [
  "🚗 NC pickup → Port of Houston",
  "🚛 Texas diesel truck ready for export",
  "📄 Title verification in progress",
  "📲 WhatsApp updates available anytime"
];

let feedIndex = 0;

function rotateFeed() {
  const el = document.getElementById("livefeed");
  if (el) {
    el.innerHTML = feeds[feedIndex];
  }
  feedIndex = (feedIndex + 1) % feeds.length;
}

setInterval(rotateFeed, 6000);