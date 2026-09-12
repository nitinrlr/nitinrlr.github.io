// Speech Bubble
document.getElementById("speech").onclick = () => {
    document.getElementById("speech-bubble").style.display = "block";
}

// Beverage
document.getElementById("drink").onchange = () => {
    const drinkSelect = document.getElementById("drink");
    const selectedDrink = drinkSelect.options[drinkSelect.selectedIndex].text;

    document.getElementById("drink-message").innerHTML =
        selectedDrink + ": Nice Choice!";
};

// Sun sticker
document.getElementById("sun").onclick = () => {
    const sticker = document.createElement("span");
    sticker.textContent = "☀️";
    sticker.classList.add("emoji-sticker");
    document.getElementById("sticker").appendChild(sticker);
};