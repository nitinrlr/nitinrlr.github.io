//when arrow is clicked switch the slide showing
document.querySelector(".hero-arrow-next").onclick = () => {
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    if (nextSlide == null) {
        nextSlide = document.getElementById("slides").firstElementChild;
    }

    slide(currentSlide, nextSlide);
};

document.querySelector(".hero-arrow-prev").onclick = () => {
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.previousElementSibling;

    if (nextSlide == null) {
        nextSlide = document.getElementById("slides").lastElementChild;
    }

    slide(currentSlide, nextSlide);
};

const getCurrentSlide = () => {
    return document.querySelector(".hero-slide:not(.hidden)");
};

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
    updateDots(nextSlide);
};

//lights up dot that matches the slide
const updateDots = (shownSlide) => {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((s, i) => {
        if (s === shownSlide) {
            dots[i].classList.add("active");
        } else {
            dots[i].classList.remove("active");
        }
    });
};

// arrow at the end moves the first card to the back
const rotateRow = (row) => {
    const arrow = row.querySelector(".row-arrow");
    row.append(row.firstElementChild);
    row.append(arrow);
};

document.querySelectorAll(".row-arrow").forEach((arrow) => {
    arrow.onclick = () => {
        rotateRow(arrow.parentElement);
    };
});
