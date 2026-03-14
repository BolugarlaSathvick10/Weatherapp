const images = {
    clouds: "./images/clouds.jpg",
    clearDay: "./images/clear-day.jpg",
    clearNight: "./images/clear-night.jpg",
    rain: "./images/rain.jpg",
    snow: "./images/snow.jpg",
    thunderstorm: "./images/thunderstorm.jpg",
    drizzle: "./images/drizzle.jpg",
}

function setBackground(condition, isDay) {  
    const body = document.body;
    const temperature = Number(arguments[2]);

    if (!isDay) {
        body.style.backgroundImage = "url(" + images.clearNight + ")";
    } else {
        if (!Number.isFinite(temperature)) {
            body.style.backgroundImage = "url(" + images.clearDay + ")";
        } else if (temperature >= 30) {
            body.style.backgroundImage = "url(" + images.clearDay + ")";
        } else if (temperature >= 15) {
            body.style.backgroundImage = "url(" + images.clouds + ")";
        } else if (temperature >= 10) {
            body.style.backgroundImage = "url(" + images.rain + ")";
        } else {
            body.style.backgroundImage = "url(" + images.snow + ")";
        }
    }
    body.classList.add("bg-fixed");
}

export { setBackground };