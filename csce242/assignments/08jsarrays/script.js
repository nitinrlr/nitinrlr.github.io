// keys are the names shown on the page, values are the links used to embed the map
const mountains = {
    "Asheville": "https://www.google.com/maps?q=Asheville,North+Carolina&output=embed",
    "Boone": "https://www.google.com/maps?q=Boone,North+Carolina&output=embed",
    "Gatlinburg": "https://www.google.com/maps?q=Gatlinburg,Tennessee&output=embed",
    "Table Rock": "https://www.google.com/maps?q=Table+Rock,South+Carolina&output=embed"
};

const beaches = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach,South+Carolina&output=embed",
    "Folly Beach": "https://www.google.com/maps?q=Folly+Beach,South+Carolina&output=embed",
    "Hilton Head": "https://www.google.com/maps?q=Hilton+Head+Island,South+Carolina&output=embed",
    "Outer Banks": "https://www.google.com/maps?q=Outer+Banks,North+Carolina&output=embed"
};

const map = document.getElementById("map");
const destinationList = document.getElementById("destination-list");

// shows map for the destination chosen
const showMap = (mapLink) => {
    map.src = mapLink;
    map.classList.remove("hide");
};

// creates link all destinations in the list
const showDestinations = (destinations) => {
    destinationList.innerHTML = "";
    map.classList.add("hide");

    for (const name in destinations) {
        const link = document.createElement("a");
        link.innerHTML = name;
        link.href = "#";

        link.onclick = (e) => {
            e.preventDefault();
            showMap(destinations[name]);
        };

        destinationList.appendChild(link);
    }
};

// show the destinations for the type picked
document.getElementById("destination-type").onchange = (e) => {
    if (e.target.value === "mountains") {
        showDestinations(mountains);
    } else if (e.target.value === "beaches") {
        showDestinations(beaches);
    } else {
        destinationList.innerHTML = "";
        map.classList.add("hide");
    }
};
