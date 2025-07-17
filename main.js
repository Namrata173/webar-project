const tracker = document.querySelector("#tracker");
let redirectTimer;

tracker.addEventListener("targetFound", () => {
  console.log("Target detected!");
  redirectTimer = setTimeout(() => {
    window.location.href = "https://www.youtube.com/shorts/vBjUy9q34SM"; // Your redirect link
  }, 30000); // 30 seconds
});

tracker.addEventListener("targetLost", () => {
  console.log("Target lost.");
  clearTimeout(redirectTimer);
});
