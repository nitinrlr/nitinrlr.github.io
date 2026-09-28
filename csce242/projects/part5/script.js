// shows and hides nav menu on small screens
document.getElementById("arrow").onclick = () => {
    const menu = document.getElementById("menu-items");
    const arrow = document.getElementById("arrow");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        arrow.innerHTML = "&#9650;";
    } else {
        arrow.innerHTML = "&#9660;";
    }
};
