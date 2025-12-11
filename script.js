// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}

// Update live feed ticker
const feeds = [
  "🚗 NC pickup → Port of Houston",
  "🚛 Texas truck ready for export",
  "📄 Title check in progress",
  "📲 WhatsApp updates available"
];

let feedIndex = 0;
function rotateFeed(){
  const tick = document.getElementById("livefeed");
  if(tick){
    tick.innerHTML = feeds[feedIndex];
  }
  feedIndex = (feedIndex + 1) % feeds.length;
}

setInterval(rotateFeed, 6000);