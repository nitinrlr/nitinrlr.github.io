// filters by genre
const pills = document.querySelectorAll(".pill");
const movieCards = document.querySelectorAll(".movie-card");
const noResults = document.getElementById("no-results");

// shows only the movies whose tag matches the genre
const filterMovies = (genre) => {
    let shown = 0;

    movieCards.forEach((card) => {
        const tag = card.querySelector(".tag").textContent;

        if (genre === "All" || tag === genre) {
            card.classList.remove("hide");
            shown++;
        } else {
            card.classList.add("hide");
        }
    });

    if (shown === 0) {
        noResults.classList.remove("hide");
    } else {
        noResults.classList.add("hide");
    }
};

// highlights the chosen genre yellow
const setActivePill = (genre) => {
    pills.forEach((pill) => {
        if (pill.textContent === genre) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
    });
};

pills.forEach((pill) => {
    pill.onclick = (e) => {
        e.preventDefault();
        setActivePill(pill.textContent);
        filterMovies(pill.textContent);
    };
});

// genre cards on the homepage link here with ?genre= in the address
const startGenre = new URLSearchParams(window.location.search).get("genre");

if (startGenre) {
    setActivePill(startGenre);
    filterMovies(startGenre);
}
