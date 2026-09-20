// menu toggle
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

// switch between exercises
document.getElementById("link-one").onclick = (event) => {
    event.preventDefault();
    document.getElementById("exercise-one").classList.remove("hide");
    document.getElementById("exercise-two").classList.add("hide");
};

document.getElementById("link-two").onclick = (event) => {
    event.preventDefault();
    document.getElementById("exercise-two").classList.remove("hide");
    document.getElementById("exercise-one").classList.add("hide");
};

// exercise 1: missing class
document.getElementById("days-missed").oninput = () => {
    const days = document.getElementById("days-missed").value;
    const deductionMessage = document.getElementById("deduction-message");
    const attendanceMessage = document.getElementById("attendance-message");
    if (days === "") {
        deductionMessage.innerHTML = "";
        attendanceMessage.innerHTML = "";
        return;
    }

    // 25 classes in the semester, attendance is worth 7% of the grade
    const percentLost = (days / 25) * 7;
    deductionMessage.innerHTML =
        "You will lose " + percentLost.toFixed(1) + "% for skipping " + days + " days.";
    if (days < 0) {
        attendanceMessage.innerHTML = "You can't miss a negative number of days";
    } else if (days <= 2) {
        attendanceMessage.innerHTML = "Good attendance, keep it up";
    } else if (days <= 5) {
        attendanceMessage.innerHTML = "Not bad, but be careful";
    } else if (days <= 10) {
        attendanceMessage.innerHTML = "This is not an online class, you are missing valuable learning opportunities.";
    } else {
        attendanceMessage.innerHTML = "At this point you might want to just drop the class.";
    }
};

// exercise 2: end of semester counter
const today = new Date();
let lastDay = new Date(today.getFullYear(), 11, 4);
const millisecondsInDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((lastDay - today) / millisecondsInDay);

document.getElementById("days-left").innerHTML = daysLeft;
const countdownMessage = document.getElementById("countdown-message");

if (daysLeft > 100) {
    countdownMessage.innerHTML = "Not time to start counting down yet.";
} else if (daysLeft > 64) {
    countdownMessage.innerHTML = "Getting closer, but there is still a lot of time.";
} else if (daysLeft > 32) {
    countdownMessage.innerHTML = "Now you can start counting down!";
} else if (daysLeft > 14) {
    countdownMessage.innerHTML = "Finals are coming, time to start studying!";
} else {
    countdownMessage.innerHTML = "Almost there, you can do it!";
}
