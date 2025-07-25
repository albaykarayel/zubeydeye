trueButton.addEventListener("click", () => {
    content.innerHTML = `
        <img src="albaycat.jpg">
        <p class="yasasinText">YAŞASIINNN</p>
        <p id="seviom">Tanıştığımıza memnun oldum bu çiçekler sanaa 🤍</p>
    `;

    const audio = document.createElement("audio");
    audio.src = "0726.mp3";
    audio.controls = true;
    audio.loop = true;
    audio.autoplay = true;

    content.appendChild(audio);
    audio.play().catch(e => {
        console.log("Oynatma hatası:", e);
    });
});

