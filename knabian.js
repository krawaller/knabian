const marquee = document.getElementById("marquee");
const video = document.querySelector("video");
const fabbs = document.getElementById("fabbs");
let fireworks;

const startParty = (e) => {
  e.stopPropagation();
  document.body.classList.add("party-started");
  fireworks = new Fireworks(document.querySelector("#fireworks-container"), {});
  toggleParty();
};

const toggleParty = () => {
  if (video.paused) {
    fireworks.start();
    video.play();
  } else {
    video.pause();
    fireworks.stop();
  }
};

document
  .getElementById("start-party-button")
  .addEventListener("click", startParty);

document.body.addEventListener("click", toggleParty);

const marqueeLines = [
  "Vem är bäst av ALLA?",
  "Who you gonna call?",
  "Säg vem som snyggast i landet är?",
  "Vem är störst och vackrast i skogen?",
];
const updateMarquee = () => {
  const currentLine = marquee.innerText;
  const currentIdx = marqueeLines.findIndex((l) => l === currentLine);
  const nextIdx = currentIdx === marqueeLines.length - 1 ? 0 : currentIdx + 1;
  marquee.innerText = marqueeLines[nextIdx];
  fabbs.classList.add("flash");
  setTimeout(() => {
    fabbs.classList.remove("flash");
  }, 500);
};

const setMarquee = marquee.addEventListener("animationiteration", () => {
  updateMarquee();
});

updateMarquee();
