const locked = document.getElementById("locked");
const content = document.getElementById("content");
const music = document.getElementById("music");

const params = new URLSearchParams(window.location.search);
const isOwner = params.get("owner") === "1";

const now = new Date();
const unlock = new Date("2026-04-02T00:00:00");

if (now >= unlock || isOwner) {
  locked.style.display = "none";
  content.style.display = "block";

  // Load music only if unlocked
  music.src =
    "https://www.youtube.com/embed/mAJa4SF_VVI?autoplay=1&loop=1&playlist=mAJa4SF_VVI";
}

document.getElementById("surpriseBtn").onclick = () => {
  alert("🎉 Surpriseee! Happy Birthday Nabilla 💖🎂");
};