class Vacation {
    constructor(title, type, description, thingsToDo, pic, map) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.map = map;
    }

    get card() {
        const section = document.createElement("section");
        section.classList.add("card");
        section.append(this.cardHeader());
        section.append(this.vacationImage());
        section.onclick = () => {
            showModal(this);
        };

        return section;
    }

    cardHeader() {
        const div = document.createElement("div");
        div.classList.add("card-header");
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;

        div.append(h3);
        div.append(p);

        return div;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    get details() {
        const div = document.createElement("div");
        div.classList.add("details");
        const h3 = document.createElement("h3");
        h3.textContent = this.title;

        div.append(h3);
        div.append(this.infoLine("Type", this.type));
        div.append(this.infoLine("Description", this.description));
        div.append(this.infoLine("Things To Do", this.thingsToDo));

        return div;
    }

    infoLine(property, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${property}</strong>: ${value}`;

        return p;
    }
}

const vacations = [];

vacations.push(new Vacation("Asheville", "Mountain",
    "A scenic mountain city in the Blue Ridge Mountains known for its art scene and the Biltmore Estate.",
    "Tour the Biltmore Estate, drive the Blue Ridge Parkway, explore the River Arts District.",
    "asheville.jpg", "https://www.google.com/maps?q=Asheville,North+Carolina&output=embed"));

vacations.push(new Vacation("Boone", "Mountain",
    "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.",
    "Go skiing, visit Appalachian State University, hike Grandfather Mountain.",
    "boone.jpg", "https://www.google.com/maps?q=Boone,North+Carolina&output=embed"));

vacations.push(new Vacation("Gatlinburg", "Mountain",
    "A mountain town sitting right at the entrance of the Great Smoky Mountains National Park.",
    "Ride the SkyLift, hike to Clingmans Dome, visit Ober Mountain.",
    "gatlinburg.jpg", "https://www.google.com/maps?q=Gatlinburg,Tennessee&output=embed"));

vacations.push(new Vacation("Myrtle Beach", "Beach",
    "A busy beach town with a long boardwalk and plenty to do after the sun goes down.",
    "Walk the boardwalk, ride the SkyWheel, play a round of mini golf.",
    "myrtlebeach.jpg", "https://www.google.com/maps?q=Myrtle+Beach,South+Carolina&output=embed"));

vacations.push(new Vacation("Folly Beach", "Beach",
    "A laid back surf town just a short drive outside of Charleston.",
    "Surf by the pier, watch the sunrise, visit the Morris Island Lighthouse.",
    "follybeach.jpg", "https://www.google.com/maps?q=Folly+Beach,South+Carolina&output=embed"));

vacations.push(new Vacation("Hilton Head", "Beach",
    "A quiet island known for its bike paths, golf courses, and calm water.",
    "Bike the beach paths, play a round of golf, take a dolphin tour.",
    "hiltonhead.jpg", "https://www.google.com/maps?q=Hilton+Head+Island,South+Carolina&output=embed"));

const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalInfo = document.querySelector("#modal-info");
const modalMap = document.querySelector("#modal-map");

const showModal = (vacation) => {
    modalInfo.innerHTML = "";
    modalInfo.append(vacation.details);
    modalMap.src = vacation.map;
    modal.style.display = "block";
};

const closeModal = () => {
    modal.style.display = "none";
    modalMap.src = "";
};

document.querySelector("#close-modal").onclick = closeModal;

vacations.forEach((vacation) => {
    gallery.append(vacation.card);
});
