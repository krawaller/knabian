const video = document.querySelector("video");
const fireworks = new Fireworks(
  document.querySelector("#fireworks-container"),
  {}
);

const toggleParty = () => {
  document.body.classList.add("party-started");
  if (video.paused) {
    fireworks.start();
    video.play();
  } else {
    video.pause();
    fireworks.stop();
  }
};

document.getElementById("start-party-button", toggleParty);

document.body.addEventListener("click", toggleParty);
