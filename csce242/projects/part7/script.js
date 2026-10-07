// Shows and hides the nav menu on small screens
document.getElementById("nav-toggle").onclick = () => {
    const menu = document.getElementById("menu-items");
    const toggle = document.getElementById("nav-toggle");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        toggle.innerHTML = "&#10005;";
    } else {
        toggle.innerHTML = "&#9776;";
    }
};
