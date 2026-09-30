// holds information for a vacation
class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    // builds card that goes in gallery
    getCard() {
        const card = document.createElement("section");
        card.classList.add("card");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        const cardTitle = document.createElement("h3");
        cardTitle.innerHTML = this.title;

        const cardType = document.createElement("p");
        cardType.innerHTML = this.type + " Vacation";

        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardType);

        const cardImage = document.createElement("img");
        cardImage.src = "images/" + this.image;
        cardImage.alt = this.title;

        card.appendChild(cardHeader);
        card.appendChild(cardImage);

        card.onclick = () => {
            showModal(this);
        };

        return card;
    }
}

const vacations = [
    new Vacation(
        "Asheville",
        "Mountain",
        "A scenic mountain city in the Blue Ridge Mountains known for its art scene and the Biltmore Estate.",
        "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore the River Arts District.",
        "asheville.jpg",
        "https://www.google.com/maps?q=Asheville,North+Carolina&output=embed"
    ),
    new Vacation(
        "Boone",
        "Mountain",
        "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
        "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
        "boone.jpg",
        "https://www.google.com/maps?q=Boone,North+Carolina&output=embed"
    ),
    new Vacation(
        "Gatlinburg",
        "Mountain",
        "A mountain town sitting right at the entrance of the Great Smoky Mountains National Park.",
        "Ride the SkyLift, hike to Clingmans Dome, visit Ober Mountain.",
        "gatlinburg.jpg",
        "https://www.google.com/maps?q=Gatlinburg,Tennessee&output=embed"
    ),
];

// puts a card on the page for every vacation in the array
const showVacations = () => {
    const gallery = document.getElementById("gallery");

    for (let i = 0; i < vacations.length; i++) {
        gallery.appendChild(vacations[i].getCard());
    }
};

showVacations();
