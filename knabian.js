const fireworks = new Fireworks(
  document.querySelector("#fireworks-container"),
  {}
);
const video = document.querySelector("video");
document.body.addEventListener("click", () => {
  if (video.paused) {
    fireworks.start();
    video.play();
  } else {
    video.pause();
    fireworks.stop();
  }
});
