const videoSelectBtn = document.getElementById("videoSelectBtn");
const { desktopCapture } = require("electron");

videoSelectBtn.onclick = getVideoSources;

async function getVideoSources() {
  const inputSources = await desktopCapture.getSources({
    types: ["window", "screen"]
  });
  console.log(inputSources);
}