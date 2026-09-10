// Speech Bubble
const speechColumn = document.getElementById("speech");
const speechBubble = document.getElementById("speech-bubble");

const showSpeech = () => {
    speechBubble.style.display = "block";
};

speechColumn.addEventListener("click", showSpeech);

// Beverage
const drinkSelect = document.getElementById("drink");
const drinkMessage = document.getElementById("drink-message");

const showDrink = () => {
    const selectedDrink =
        drinkSelect.options[drinkSelect.selectedIndex].text;
    drinkMessage.textContent = `${selectedDrink}: Nice Choice!`;
};

drinkSelect.addEventListener("change", showDrink);

// Sun sticker
const sun = document.getElementById("sun");
const stickerColumn = document.getElementById("sticker");

const addSticker = () => {
    const sticker = document.createElement("span");
    sticker.textContent = "☀️";
    sticker.classList.add("emoji-sticker");
    stickerColumn.appendChild(sticker);
};

sun.addEventListener("click", addSticker);