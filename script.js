const playBtn = document.getElementById("playBtn");
const song = document.getElementById("song");

playBtn.addEventListener("click", () => {
  song.play();
  playBtn.innerText = "🎵 Playing...";
});
