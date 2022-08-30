//const button = document.getElementById("submit");
const form = document.querySelector('form');
const input = document.getElementById('input')

const locationName = document.getElementById("location")
const tempText = document.getElementById("temp")
const feelsLike = document.getElementById("feelsLike")
const humidity = document.getElementById("humidity")
const tempMin = document.getElementById("tempMin")
const tempMax = document.getElementById("tempMax")
const clouds = document.getElementById("clouds")
const wind = document.getElementById("wind")



async function getWeather (location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6b90e7ed6704a9984fc25f85e2580025`, {mode: 'cors'})
        const weatherData = await response.json();
        const weather = {
            temperature: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max,
            clouds: weatherData.weather[0].description,
            wind: weatherData.wind.deg,
        }
        locationName.textContent = location;
        tempText.textContent = weather.temperature;
        feelsLike.textContent = weather.feelsLike;
        humidity.textContent = weather.humidity;
        tempMin.textContent = weather.tempMin;
        tempMax.textContent = weather.tempMax;
        clouds.textContent = weather.clouds;
        wind.textContent = weather.wind;
    } catch (error){
        tempText.textContent = "Error"
    }
}

getWeather('chicago')

form.addEventListener('submit', e => {
    e.preventDefault();
    const newInput = input.value;
    const newHead = document.createElement('h1')
    getWeather(newInput);
    document.body.appendChild(newHead)
    input.value = null


})


