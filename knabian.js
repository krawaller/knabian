/* --------------------------- Element refs --------------------------- */

const ui = {
  container: document.body,
  marquee: document.getElementById("marquee"), // side-scrolling text container
  video: document.querySelector("video"),
  fabbs: document.getElementById("fabbs"), // central flashing "Fabbs"
  fireworks: document.querySelector("#fireworks-container"),
  partyBtn: document.getElementById("start-party-button"),
};

/* --------------------------- Variables --------------------------- */

// Accessed in `toggleParty`
const fireworksControls = new Fireworks(ui.container, {});

// Used in `updateMarquee`
const marqueeLines = [
  "Vem är bäst av ALLA?",
  "Who you gonna call?",
  "Säg vem som snyggast i landet är?",
  "Vem är störst och vackrast i skogen?",
];

/* --------------------------- Functions --------------------------- */

// Used for initial button
const startParty = (e) => {
  e.stopPropagation();
  updateMarquee();
  ui.container.classList.add("party-started");
  ui.container.requestFullscreen();
  toggleParty();
};

// Called both in `startParty` and as body click handler
// The body handler is a way to pause video/fireworks (mainly useful during dev)
const toggleParty = () => {
  if (ui.video.paused) {
    fireworksControls.start();
    ui.video.play();
  } else {
    ui.video.pause();
    fireworksControls.stop();
  }
};

// Triggered everytime the marquee animation has scrolled by! (and at boot)
// We should then change marquee text and make central Fabbs flash a bit
const updateMarquee = () => {
  const currentLine = marquee.innerText;
  const currentIdx = marqueeLines.findIndex((l) => l === currentLine);
  const nextIdx = currentIdx === marqueeLines.length - 1 ? 0 : currentIdx + 1;
  marquee.innerText = marqueeLines[nextIdx];
  fabbs.classList.add("flash");
  setTimeout(() => {
    fabbs.classList.remove("flash");
  }, 1000);
};

/* --------------------------- Catch events --------------------------- */

ui.partyBtn.addEventListener("click", startParty);

ui.container.addEventListener("click", toggleParty);

ui.marquee.addEventListener("animationiteration", updateMarquee);
