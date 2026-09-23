// possible car colors
const colors = ["#3ec9a7", "#8fd13f", "#5b5fc7", "#e8785a", "#2c2c54", "#bcd9f0", "#b06fd1"];

const addCar = (color, left, top) => {
    const car = document.createElement("div");
    car.classList.add("car");
    car.style.backgroundColor = color;
    car.style.left = left + "%";
    car.style.top = top + "px";

    const roof = document.createElement("div");
    roof.classList.add("car-roof");
    car.appendChild(roof);

    document.getElementById("road").appendChild(car);
};

// adds cars when page loads
const numberOfCars = 8;

for (let i = 0; i < numberOfCars; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    // keeps car on the page, 0% to 88% from the left
    const left = Math.floor(Math.random() * 89);

    // chooses top lane or the bottom lane
    let top = 30;

    if (Math.random() < 0.5) {
        top = 105;
    }

    addCar(color, left, top);
}
