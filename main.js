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
const date = document.getElementById("date")
const time = document.getElementById("time")



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
        locationName.textContent = location.charAt(0).toUpperCase() + location.slice(1);
        tempText.textContent = `${kToC(weather.temperature)} \u00B0C`;
        feelsLike.textContent = `${kToC(weather.feelsLike)} \u00B0C`;
        humidity.textContent = weather.humidity;
        tempMin.textContent = `${kToC(weather.tempMin)} \u00B0C`;
        tempMax.textContent = `${kToC(weather.tempMax)} \u00B0C`;
        clouds.textContent = weather.clouds;
        wind.textContent = weather.wind;
        date.textContent = dateLocation();
    } catch (error){
        tempText.textContent = "Error"
    }
}

let monthArr = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
getWeather('chicago')

//document.getElementById("container").style.background-image = "url(./Assets/rainyDay.webp)"

const dateLocation = () => {
    let locationDate = new Date();
    return `${monthArr[locationDate.getMonth()]} ${locationDate.getDate()}, ${locationDate.getUTCFullYear()}`
}

dateLocation()
form.addEventListener('submit', e => {
    e.preventDefault();
    const newInput = input.value;
    const newHead = document.createElement('h1')
    getWeather(newInput);
    document.body.appendChild(newHead)
    input.value = null


})

const kToC = (k) => {
    return Math.floor(k -273.15)
}

//Background is in body

//document.body.background = "./Assets/rainyDay.webp"


const setBackground = (time) => {
    if (time > 6 && time <= 7){
        document.body.background = "./Assets/sunrise.jpeg"
    } else if (time > 7 && time <= 17 ){
        document.body.background = "./Assets/day.jpeg"
    } else if (time > 17 && time <= 18 ){
        document.body.background = "./Assets/sunset.jpeg"
    } else {
        document.body.background = "./Assets/rainyDay.webp"
    }
}

setBackground(time)