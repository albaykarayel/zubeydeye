const button = document.getElementById("moveButton");
const trueButton = document.getElementById("trueButton");
const content = document.getElementById("content");

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 10);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 10);
    return { 
        x: Math.max(10, x), 
        y: Math.max(10, y) 
    };
}

button.addEventListener("mouseover", () => {
    const { x, y } = getRandomPosition();
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

trueButton.addEventListener("click", () => {
    content.innerHTML = `
        <img src="albaycat.jpg">
        <p class="yasasinText">YAŞASIINNN</p>
        <p id="seviom">Tanıştığımıza memnun oldum bu çiçekler sanaa 🤍</p>
        <audio autoplay loop controls>
        <source src="0726.mp3" type="audio/mpeg">
        Tarayıcın <audio></audio> etiketini desteklemiyor :'(
        </audio>
    `;
});
