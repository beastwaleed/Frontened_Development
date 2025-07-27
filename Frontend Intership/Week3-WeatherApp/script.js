const api = "dd124458697ee2aa1591d15d4f670c47";

const weatherDataElem = document.querySelector(".weatherData");

const cityInput = document.getElementById("cityInput");

const formElem = document.querySelector("form");

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityName = cityInput.value;
    getWeatherData(cityName);
})

async function getWeatherData(cityName) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`);

        if (!response.ok) {
            throw new Error("Network Error!!!");
        }

        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ];

        weatherDataElem.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

        weatherDataElem.querySelector(".temp").textContent = `${temp}°C`;
        weatherDataElem.querySelector(".descrip").textContent = desc;
        weatherDataElem.querySelector(".details").innerHTML = details.map((details) => `<div>${details}</div>`).join("");

    } catch (error) {
        weatherDataElem.querySelector(".icon").innerHTML = "";
        weatherDataElem.querySelector(".temp").textContent = "";
        weatherDataElem.querySelector(".descrip").textContent = "Error!! Please Try Again with Proper City Name";
        weatherDataElem.querySelector(".details").innerHTML = "";


    }
}