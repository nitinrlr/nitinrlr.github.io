// movies.json and its images live in the json folder on github
const base_url = "https://nitinrlr.github.io/csce242/projects/part7/json/";

const getMovies = async () => {
    const url = `${base_url}movies.json`;
    const response = await fetch(url);
    return response.json();
};

const showMovies = async () => {
    const movies = await getMovies();

    movies.forEach((movie) => {
        document.querySelector(".movie-grid").append(displayMovie(movie));
    });

    const startGenre = new URLSearchParams(window.location.search).get("genre");

    if (startGenre) {
        setActivePill(startGenre);
        filterMovies(startGenre);
    }
};

const displayMovie = (movie) => {
    const article = document.createElement("article");
    article.classList.add("movie-card");

    const a = document.createElement("a");
    a.href = "#";

    if (movie._id === 1 || movie.title === "Jurassic Park") {
        a.href = "../movie/index.html";
    }

    article.append(a);

    const img = document.createElement("img");
    img.src = base_url + movie.img_name;
    img.alt = `${movie.title} poster`;
    a.append(img);

    const h3 = document.createElement("h3");
    h3.textContent = movie.title;
    a.append(h3);

    const year = document.createElement("p");
    year.classList.add("movie-year");
    year.textContent = movie.year;
    article.append(year);

    const meta = document.createElement("p");
    meta.classList.add("movie-meta");
    meta.innerHTML = `<span class="tag">${movie.genre}</span><span class="rating">&#9733; ${movie.rating.toFixed(1)}</span>`;
    article.append(meta);

    return article;
};

showMovies();
