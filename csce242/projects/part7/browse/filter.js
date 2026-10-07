// filters by genre
const pills = document.querySelectorAll(".pill");
const noResults = document.getElementById("no-results");

// shows only the movies whose tag matches the genre
const filterMovies = (genre) => {
    // the cards come from movies.json, so look them up each time
    const movieCards = document.querySelectorAll(".movie-card");
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

