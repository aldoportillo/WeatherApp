//const button = document.getElementById("submit");
const form = document.querySelector('form');
const tempText = document.getElementById("temp")
const input = document.getElementById('input')

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
        tempText.textContent = weather.feelsLike;
    } catch (error){
        tempText.textContent = "Error"
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const newInput = input.value;
    const newHead = document.createElement('h1')
    getWeather(newInput);
    document.body.appendChild(newHead)
    input.value = null


})


